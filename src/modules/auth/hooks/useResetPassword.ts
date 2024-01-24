import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError, api } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";

interface ResetPasswordResponse {}

interface ResetPasswordPayload {
    email: string;
}

const requestResetPassword = async (
    body: ResetPasswordPayload
): Promise<ResetPasswordResponse> => {
    return await api.post("auth/reset-password", body);
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