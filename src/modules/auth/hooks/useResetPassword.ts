import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { ResetPasswordResponse, requestResetPassword } from "../api";


const useResetPassword = (
    options?: MutationOptions<ResetPasswordResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: requestResetPassword,
        ...options,
    })
}

export default useResetPassword;