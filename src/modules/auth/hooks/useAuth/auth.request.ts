import { instance } from "libs/axios";
import { AuthResponse } from "./auth.types";

export const requestAuth = async (): Promise<AuthResponse> => {
    return await instance.get("users/auth");
}