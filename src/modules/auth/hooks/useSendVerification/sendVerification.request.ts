
import { instance } from "libs/axios";
import { SendVerificationPayload, SendVerificationResponse } from "./sendVerification.types";

export const requestSendVerification = async (
  body: SendVerificationPayload
): Promise<SendVerificationResponse> => {
  return await instance.post("users/send-verification", body);
};
