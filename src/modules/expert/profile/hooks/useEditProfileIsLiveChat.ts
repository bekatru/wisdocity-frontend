import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { EditProfileIsBooleanResponse, profileRequest } from "../api";
import { useMutation } from "@tanstack/react-query";

export const useEditProfileIsLiveChat = (
    options?: MutationOptions<EditProfileIsBooleanResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: profileRequest.editProfileIsLiveChat,
        ...options,
    })
}