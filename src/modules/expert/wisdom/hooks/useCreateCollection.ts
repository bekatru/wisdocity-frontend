import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { CreateCollectionResponse, request } from "../api";
import { useMutation } from "@tanstack/react-query";

export const useCreateCollection = (
    options?: MutationOptions<CreateCollectionResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: request.createCollection,
        ...options,
    })
}