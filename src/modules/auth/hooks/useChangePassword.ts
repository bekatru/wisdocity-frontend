import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError, instance } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";

interface ChangePasswordResponse {}

interface ChangePasswordPayload {
    password: string;
    token: string;
}

const requestChangePassword = async (
    body: ChangePasswordPayload
): Promise<ChangePasswordResponse> => {
    return await instance.post("auth/change-password", body);
}

const useChangePassword = (
    options?: MutationOptions<ChangePasswordResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: requestChangePassword,
        ...options,
    })
}

export default useChangePassword;