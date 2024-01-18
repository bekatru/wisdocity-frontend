import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios"
import { MutationOptions } from "libs/reactQuery";
import { SendVerificationResponse } from "./sendVerification.types"
import { requestSendVerification } from "./sendVerification.request"

const useSendVerification = (
  options?: MutationOptions<SendVerificationResponse, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: requestSendVerification,
    ...options
  });
};

export default useSendVerification;
