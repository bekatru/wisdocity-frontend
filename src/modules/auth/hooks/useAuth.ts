import { useQuery } from "@tanstack/react-query";
import { QueryOptions } from "libs/reactQuery";
import { ApiError, ApiServiceError } from "libs/axios";
import { AuthResponse, requestAuth } from "../api";

const useAuth = (
    options?: QueryOptions<AuthResponse, ApiServiceError<ApiError>>
) => {
    return useQuery({
        queryKey: ['profile'],
        queryFn: requestAuth,
        ...options
    });
}

export default useAuth;