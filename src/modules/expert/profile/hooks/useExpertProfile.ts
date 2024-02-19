import { useQuery } from "@tanstack/react-query";
import { QueryOptions } from "libs/reactQuery";
import { ApiError, ApiServiceError } from "libs/axios";
import { ExpertProfileResponse, profileRequest } from "../api";

export const useExpertProfile = (
    options?: QueryOptions<ExpertProfileResponse, ApiServiceError<ApiError>>
) => {
    return useQuery({
        queryKey: ['expert_profile'],
        queryFn: profileRequest.expertProfile,
        ...options
    });
}

