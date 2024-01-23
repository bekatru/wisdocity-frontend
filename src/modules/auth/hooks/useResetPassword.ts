import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError, instance } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";

interface ResetPasswordResponse {}

interface ResetPasswordPayload {
    email: string;
}

const requestResetPassword = async (
    body: ResetPasswordPayload
): Promise<ResetPasswordResponse> => {
    return await instance.post("auth/reset-password", body);
}

const useResetPassword = (
    options?: MutationOptions<ResetPasswordResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: requestResetPassword,
        ...options,
    })
}

export default useResetPassword;