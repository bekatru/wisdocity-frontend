import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { UpdateEmailResponse, request } from "../api";


const useChangeEmail = (
    options?: MutationOptions<UpdateEmailResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: request.changeEmail,
        ...options,
    })
}

export default useChangeEmail;