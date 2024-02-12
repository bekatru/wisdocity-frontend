import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { EditProfileContactResponse, profileRequest } from "../api";
import { useMutation } from "@tanstack/react-query";

export const useEditProfileContact = (
    options?: MutationOptions<EditProfileContactResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: profileRequest.editProfileContact,
        ...options,
    })
}