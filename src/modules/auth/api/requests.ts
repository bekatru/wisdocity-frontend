import { api } from "libs/axios";
import {
    AuthResponse,
    ChangePasswordPayload,
    ChangePasswordResponse,
    RefreshPayload,
    RefreshResponse,
    ResetPasswordPayload,
    ResetPasswordResponse,
    SendVerificationResponse,
    SignInPayload,
    SignInResponse,
    SignUpPayload,
    SignUpResponse,
    UpdateEmailPayload,
    UpdateEmailResponse,
    VerifyEmailPayload,
    VerifyEmailResponse
} from "./types";

export const resetPassword = async (
    body: ResetPasswordPayload
): Promise<ResetPasswordResponse> => {
    return await api.post("auth/reset-password", body);
}

export const changePassword = async (
    body: ChangePasswordPayload
): Promise<ChangePasswordResponse> => {
    return await api.post("auth/change-password", body);
}

export const verifyAccount = async (
    body: VerifyEmailPayload
): Promise<VerifyEmailResponse> => {
    return await api.post("verification/verify", body);
}

export const changeEmail = async (
    body: UpdateEmailPayload
): Promise<UpdateEmailResponse> => {
    return await api.post("verification/change-email", body);
}

export const register = async (
    body: SignUpPayload
): Promise<SignUpResponse> => {
    return await api.post("auth/register", body);
};

export const logout = async () => {
    // todo
    return await api.put("");
};

export const login = async (
    body: SignInPayload
): Promise<SignInResponse> => {
    return await api.post("auth/login", body);
};

export const resendVerification = async (): Promise<SendVerificationResponse> => {
    return await api.get("verification/resend-verification");
};

export const refreshTokens = async (
    body: RefreshPayload
): Promise<RefreshResponse> => {
    return await api.post("users/refresh", body);
};

export const profile = async (): Promise<AuthResponse> => {
    return await api.get("auth/profile");
}
