import { useQuery } from "@tanstack/react-query"
import { QueryOptions } from "libs/reactQuery"
import { ApiError, ApiServiceError, api } from "libs/axios"

interface AuthResponse {
    current_role: string;
    email: string;
    is_verified: boolean;
    username: string;
}


const requestAuth = async (): Promise<AuthResponse> => {
    return await api.get("auth/profile");
}

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