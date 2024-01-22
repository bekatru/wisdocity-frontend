import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError, instance } from "libs/axios"
import { MutationOptions } from "libs/reactQuery";

interface SendVerificationResponse {
}

const requestSendVerification = async (): Promise<SendVerificationResponse> => {
  return await instance.get("verification/resend-verification");
};

const useSendVerification = (
  options?: MutationOptions<SendVerificationResponse, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: requestSendVerification,
    ...options
  });
};

export default useSendVerification;
