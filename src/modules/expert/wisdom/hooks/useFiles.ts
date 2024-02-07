import { useQuery } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios";
import { QueryOptions } from "libs/reactQuery";
import { Media, request } from "../api";

export const useFiles = (
    options?: QueryOptions<Media[], ApiServiceError<ApiError>>
) => {
    return useQuery({
        queryKey: ['files'],
        queryFn: request.fetchFiles,
        ...options,
    })
}