import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { ChangePasswordResponse, request } from "../api";


const useChangePassword = (
    options?: MutationOptions<ChangePasswordResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: request.changePassword,
        ...options,
    })
}

export default useChangePassword;