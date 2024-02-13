import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { EditProfileSocialMediaResponse, profileRequest } from "../api";
import { useMutation } from "@tanstack/react-query";

export const useEditProfileSocialMedia = (
    options?: MutationOptions<EditProfileSocialMediaResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: profileRequest.editProfileSocialMedia,
        ...options,
    })
}