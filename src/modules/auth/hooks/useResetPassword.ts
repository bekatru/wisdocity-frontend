import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { ResetPasswordResponse, request } from "../api";


const useResetPassword = (
    options?: MutationOptions<ResetPasswordResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: request.resetPassword,
        ...options,
    })
}

export default useResetPassword;