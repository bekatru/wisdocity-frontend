import { useMutation } from "@tanstack/react-query";



import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { SignUpResponse } from "./signup.types";
import { requestSignUp } from "./signup.request";

const useSignUp = (
  options?: MutationOptions<SignUpResponse, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: requestSignUp,
    ...options
  });
};

export default useSignUp;
