export interface Media {
    id: number;
    fileName: string;
    contentType: string;
    updatedAt: string;
    key: string;
}

export interface Collection {
    id: string;
    name: string;
    tags: string[];
}

export interface CreateCollectionPayload {
    name: string;
    tags: string[];
}

export interface CreateCollectionResponse { }

export interface UploadFilesPayload {
    collectionId: string;
    files: File[];
}

export interface UploadFilesResponse {
    message: string;
}
