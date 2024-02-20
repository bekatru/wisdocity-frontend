import { ApiError, ApiServiceError } from "libs/axios";
import { QueryOptions } from "libs/reactQuery";
import { FaqResponse, profileRequest } from "../api";
import { useQuery } from "@tanstack/react-query";

export const useFetchFaq = (
    options?: QueryOptions<FaqResponse, ApiServiceError<ApiError>>
) => {
    console.log("useFetchFaq");
    return useQuery({
        queryKey: ['faq'],
        queryFn: profileRequest.fetchFaq,
        ...options,
    })
}


