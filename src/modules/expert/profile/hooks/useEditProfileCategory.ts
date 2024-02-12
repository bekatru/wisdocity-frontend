import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { EditProfileCategoryResponse, profileRequest } from "../api";
import { useMutation } from "@tanstack/react-query";

export const useEditProfileCategory= (
    options?: MutationOptions<EditProfileCategoryResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: profileRequest.editProfileCategory,
        ...options,
    })
}