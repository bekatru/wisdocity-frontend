import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { AddFaqResponse, profileRequest } from "../api";
import { useMutation } from "@tanstack/react-query";

export const useAddFaq = (
    options?: MutationOptions<AddFaqResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: profileRequest.addFaq,
        ...options,
    })
}