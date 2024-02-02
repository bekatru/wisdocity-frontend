import { wisdocityApi, assistant } from "libs/axios";
import { Collection, UploadFilesPayload, UploadFilesResponse } from "./types";

export const fetchCollections = async (): Promise<Collection[]> => {
    return await wisdocityApi.get("collections");
}

export const uploadFiles = async (body: UploadFilesPayload): Promise<UploadFilesResponse> => {
    const formData = new FormData();
    formData.append("folderId", body.collectionId);
    body.files.forEach((file) => {
        formData.append('files', file)
    })
    return await assistant.post('collections/upload-files', formData);
}