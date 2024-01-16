
import { instance } from "libs/axios";
import { SignUpPayload, SignUpResponse } from "./signin.types";

export const requestSignUp = async (
  body: SignUpPayload
): Promise<SignUpResponse> => {
  return await instance.post("users/registration", body);
};
