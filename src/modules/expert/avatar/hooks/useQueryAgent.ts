import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { QueryAgentResponse,avatarRequest} from "../api";
import { useMutation } from "@tanstack/react-query";

export const useQueryAgent = (
    options?: MutationOptions<QueryAgentResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: avatarRequest.queryAgent,
        ...options,
    })
}