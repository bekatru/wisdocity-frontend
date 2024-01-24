import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError, api } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { SignUpResponse, requestSignUp } from "../api";


const useSignUp = (
  options?: MutationOptions<SignUpResponse, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: requestSignUp,
    ...options
  });
};

export default useSignUp;
