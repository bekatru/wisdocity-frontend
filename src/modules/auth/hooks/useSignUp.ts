import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError, api } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { SignUpResponse, request } from "../api";


const useSignUp = (
  options?: MutationOptions<SignUpResponse, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: request.register,
    ...options
  });
};

export default useSignUp;
