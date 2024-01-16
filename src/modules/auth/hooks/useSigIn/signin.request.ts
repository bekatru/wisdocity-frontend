
import { instance } from "libs/axios";
import { SignInPayload, SignInResponse } from "./signin.types";

export const requestSignIn = async (
  body: SignInPayload
): Promise<SignInResponse> => {
  return await instance.post("users/login", body);
};
