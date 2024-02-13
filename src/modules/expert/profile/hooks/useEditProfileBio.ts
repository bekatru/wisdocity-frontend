import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { EditProfileBioResponse, profileRequest } from "../api";
import { useMutation } from "@tanstack/react-query";

export const useEditProfileBio = (
    options?: MutationOptions<EditProfileBioResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: profileRequest.editProfileBio,
        ...options,
    })
}