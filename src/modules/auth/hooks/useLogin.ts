import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { SignInResponse, request } from "../api";


const useLogin = (
  options?: MutationOptions<SignInResponse, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: request.login,
    ...options
  });
};

export default useLogin;
