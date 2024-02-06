export interface Media {
    id: number;
    fileName: string;
    contentType: string;
    updatedAt: string;
}

export interface Collection {
    id: string;
    name: string;
}

export interface UploadFilesPayload {
    collectionId: string;
    files: File[];
}

export interface UploadFilesResponse {
    message: string;
}
