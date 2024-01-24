import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError, api } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";

interface VerifyEmailResponse {
}

interface VerifyEmailPayload {
    token: string;
}

const requestVerifyEmail = async (
    body: VerifyEmailPayload
): Promise<VerifyEmailResponse> => {
    return await api.post("verification/verify", body);
}

const useVerifyEmail = (
    options?: MutationOptions<VerifyEmailResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: requestVerifyEmail,
        ...options,
    })
}

export default useVerifyEmail;