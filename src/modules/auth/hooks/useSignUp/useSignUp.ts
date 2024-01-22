import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError, instance } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";


interface SignUpResponse {
  access_token: string;
  refresh_token: string;
}

interface SignUpPayload {
  email: string;
  password: string;
  username: string;
  country: string;
  current_role: string;
  is_subscribed: boolean;
}



const requestSignUp = async (
  body: SignUpPayload
): Promise<SignUpResponse> => {
  return await instance.post("auth/register", body);
};


const useSignUp = (
  options?: MutationOptions<SignUpResponse, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: requestSignUp,
    ...options
  });
};

export default useSignUp;
