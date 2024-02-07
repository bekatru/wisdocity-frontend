import { wisdocityApi, assistant } from "libs/axios";
import { Collection, CreateCollectionPayload, CreateCollectionResponse, Media, UploadFilesPayload, UploadFilesResponse } from "./types";

export const fetchCollections = async (): Promise<Collection[]> => {
    return await wisdocityApi.get("collections");
}

export const uploadFiles = async (body: UploadFilesPayload): Promise<UploadFilesResponse> => {
    const formData = new FormData();
    formData.append("folderId", body.collectionId);
    body.files.forEach(async (file) => {
        formData.append('files', file)

        await wisdocityApi.post('experts/media', {
            fileName: file.name,
            contentType: file.type,
            size: file.size,
            collectionId: body.collectionId
        })

    })
    return await assistant.post('collections/upload-files', formData);
}

export const fetchFiles = async (): Promise<Media[]> => {
    return await wisdocityApi.get("experts/files")
}

export const createCollection = async (body: CreateCollectionPayload): Promise<CreateCollectionResponse> => {
    return await wisdocityApi.post('collections', body);
}