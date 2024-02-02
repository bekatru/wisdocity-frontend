import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { UploadFilesResponse, request } from "../api";

export const useUploadFiles = (
    options?: MutationOptions<UploadFilesResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: request.uploadFiles,
        ...options,
    })
}