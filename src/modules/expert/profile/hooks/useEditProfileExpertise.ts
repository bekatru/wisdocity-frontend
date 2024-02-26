import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { EditProfileExpertiseResponse, profileRequest } from "../api";
import { useMutation } from "@tanstack/react-query";

export const useEditProfileExpertise= (
    options?: MutationOptions<EditProfileExpertiseResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: profileRequest.editProfileExpertise,
        ...options,
    })
}