import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { EditProfileLinkResponse, profileRequest } from "../api";
import { useMutation } from "@tanstack/react-query";

export const useEditProfileLiveChatLink = (
    options?: MutationOptions<EditProfileLinkResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: profileRequest.editProfileLiveChatLink,
        ...options,
    })
}