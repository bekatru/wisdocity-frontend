import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { EditProfileInformationResponse, profileRequest } from "../api";
import { useMutation } from "@tanstack/react-query";

export const useEditProfileInformation = (
    options?: MutationOptions<EditProfileInformationResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: profileRequest.editProfileInformation,
        ...options,
    })
}