import { wisdocityApi, assistant } from "libs/axios";
import { Collection, CreateCollectionPayload, CreateCollectionResponse, Media, UploadFilesPayload, UploadFilesResponse } from "./types";
import axios from "axios";

export const fetchCollections = async (): Promise<Collection[]> => {
    return await wisdocityApi.get("collections");
}

export const uploadFiles = async (body: UploadFilesPayload): Promise<UploadFilesResponse> => {
    const formData = new FormData();
    formData.append("folderId", body.collectionId);

    console.log('before');

    for (let file of body.files) {
        if (file.type.startsWith('audio') || file.type.startsWith('video')) {
            const audioFormData = new FormData();
            audioFormData.append("language", "en");
            audioFormData.append('file', file);

            const response = await axios.post('https://api.jillwhite.anyagent.ai/notes', audioFormData, {
                headers: {
                    "Authorization": "gf1DMx25ADNpUoFBWcZxjYXu5x9uQxIXaRGcz4p-pnM"
                }
            });

            const blob = new Blob([response.data.transcript, response.data.notes], { type: 'text/plain' });
            const textFile = new File([blob], file.name + '.txt', { type: 'text/plain' });

            formData.append('files', textFile);
        } else {
            formData.append('files', file);
        }

        await wisdocityApi.post('experts/media', {
            fileName: file.name,
            contentType: file.type,
            size: file.size,
            collectionId: body.collectionId
        });
    }
    return await assistant.post('collections/upload-files', formData);
    //     console.log(file)
    //     // await wisdocityApi.post('experts/media', {
    //     //     fileName: file.name,
    //     //     contentType: file.type,
    //     //     size: file.size,
    //     //     collectionId: body.collectionId
    //     // })
    //     console.log('hello')
    //     if (file.type.startsWith('audio') || file.type.startsWith('video')) {
    //         console.log("world")
    //         const audioFormData = new FormData();
    //         audioFormData.append("language", "en");
    //         audioFormData.append('file', file)
    //         console.log('transcript 1')
    //         try {

    //             const response = await axios.post('https://api.jillwhite.anyagent.ai/notes', audioFormData, {
    //                 headers: {
    //                     "Authorization": "gf1DMx25ADNpUoFBWcZxjYXu5x9uQxIXaRGcz4p-pnM"
    //                 }
    //             });
    //         } catch (err) {
    //             console.log(err)
    //         }

    //         const blob = new Blob([response.data.transcript, response.data.notes], { type: 'text/plain' });
    //         const textFile = new File([blob], file.name + '.txt', { type: 'text/plain' });
    //         console.log(textFile);
    //         formData.append("files", textFile);
    //     } else {
    //         formData.append('files', file)
    //     }

    // })

    // return await assistant.post('collections/upload-files', formData);
}

export const fetchFiles = async (): Promise<Media[]> => {
    return await wisdocityApi.get("experts/files")
}

export const createCollection = async (body: CreateCollectionPayload): Promise<CreateCollectionResponse> => {
    return await wisdocityApi.post('collections', body);
}

