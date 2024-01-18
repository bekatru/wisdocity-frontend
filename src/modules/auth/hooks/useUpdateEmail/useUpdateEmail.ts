import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError, instance } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";

interface UpdateEmailResponse {
    status: number;
    tokens: {
        access: string;
        refresh: string;
    },
    message: string;
}

interface UpdateEmailPayload {
    email: string;
}

const requestUpdateEmail = async (
    body: UpdateEmailPayload
): Promise<UpdateEmailResponse> => {
    return await instance.post("users/update-email", body);
}

const useUpdateEmail = (
    options?: MutationOptions<UpdateEmailResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: requestUpdateEmail,
        ...options,
    })
}

export default useUpdateEmail;