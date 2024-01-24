import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios"
import { MutationOptions } from "libs/reactQuery";
import { SendVerificationResponse, requestSendVerification } from "../api";


const useSendVerification = (
  options?: MutationOptions<SendVerificationResponse, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: requestSendVerification,
    ...options
  });
};

export default useSendVerification;
