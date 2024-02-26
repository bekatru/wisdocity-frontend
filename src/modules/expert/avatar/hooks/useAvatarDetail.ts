import { useQuery } from "@tanstack/react-query";
import { QueryOptions } from "libs/reactQuery";
import { ApiError, ApiServiceError } from "libs/axios";
import { AvatarDetailResponse, avatarRequest } from "../api";

export const useAvatarDetail = (
    options?: QueryOptions<AvatarDetailResponse, ApiServiceError<ApiError>>
) => {
    return useQuery({
        queryKey: ['avatar_detail'],
        queryFn: avatarRequest.avatarDetail,
        ...options
    });
}

