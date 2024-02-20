import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { DeleteFaqResponse, profileRequest } from "../api";
import { useMutation } from "@tanstack/react-query";

export const useDeleteFaq = (
    options?: MutationOptions<DeleteFaqResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: profileRequest.deleteFaq,
        ...options,
    })
}