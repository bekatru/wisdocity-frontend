import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios"
import { MutationOptions } from "libs/reactQuery";
import { SendVerificationResponse, request } from "../api";


const useResendVerification = (
  options?: MutationOptions<SendVerificationResponse, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: request.resendVerification,
    ...options
  });
};

export default useResendVerification;
