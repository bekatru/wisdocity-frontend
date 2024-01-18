import { useQuery } from "@tanstack/react-query"
import { QueryOptions } from "libs/reactQuery"
import { AuthResponse } from "./auth.types"
import { ApiError, ApiServiceError } from "libs/axios"
import { requestAuth } from "./auth.request"

const useAuth = (
    options?: QueryOptions<AuthResponse, ApiServiceError<ApiError>>
) => {
    return useQuery({
        queryKey: ['auth'],
        queryFn: requestAuth,
        ...options
    });
}

export default useAuth;