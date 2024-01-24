import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { VerifyEmailResponse, request } from "../api";

const useVerifyEmail = (
    options?: MutationOptions<VerifyEmailResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: request.verifyAccount,
        ...options,
    })
}

export default useVerifyEmail;