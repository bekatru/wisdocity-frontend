import { QueryOptions } from "libs/reactQuery";
import { Collection, request } from "../api";
import { ApiError, ApiServiceError } from "libs/axios";
import { useQuery } from "@tanstack/react-query";

export const useCollections = (
    options?: QueryOptions<Collection[], ApiServiceError<ApiError>>
) => {
    return useQuery({
        queryKey: ['collections'],
        queryFn: request.fetchCollections,
        ...options,
    });
}