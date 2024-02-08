import { useQuery } from "@tanstack/react-query";
import { QueryOptions } from "libs/reactQuery";
import { ApiError, ApiServiceError } from "libs/axios";
import { ExpertProfileResponse, request } from "../api";

const useExpertProfile = (
    options?: QueryOptions<ExpertProfileResponse, ApiServiceError<ApiError>>
) => {
    return useQuery({
        queryKey: ['expert_profile'],
        queryFn: request.expertProfile,
        ...options
    });
}

export default useExpertProfile;