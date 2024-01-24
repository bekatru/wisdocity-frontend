import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError, api } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";

interface SignInResponse {
  access_token: string;
  refresh_token: string;
}
interface SignInPayload {
  email: string;
  password: string;
}

const requestSignIn = async (
  body: SignInPayload
): Promise<SignInResponse> => {
  return await api.post("auth/login", body);
};

const useSignIn = (
  options?: MutationOptions<SignInResponse, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: requestSignIn,
    ...options
  });
};

export default useSignIn;
