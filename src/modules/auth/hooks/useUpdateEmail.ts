import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { UpdateEmailResponse, requestUpdateEmail } from "../api";


const useUpdateEmail = (
    options?: MutationOptions<UpdateEmailResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: requestUpdateEmail,
        ...options,
    })
}

export default useUpdateEmail;