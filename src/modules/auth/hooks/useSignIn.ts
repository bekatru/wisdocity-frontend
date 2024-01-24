import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { SignInResponse, requestSignIn } from "../api";


const useSignIn = (
  options?: MutationOptions<SignInResponse, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: requestSignIn,
    ...options
  });
};

export default useSignIn;
