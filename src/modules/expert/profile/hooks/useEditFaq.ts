import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { EditFaqResponse, profileRequest } from "../api";
import { useMutation } from "@tanstack/react-query";

export const useEditFaq = (
    options?: MutationOptions<EditFaqResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: profileRequest.editFaq,
        ...options,
    })
}