import { wisdocityApi } from "libs/axios";
import {
    AuthResponse,
    ChangePasswordPayload,
    ChangePasswordResponse,
    ExpertProfileResponse,
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
    return await wisdocityApi.post("auth/reset-password", body);
}

export const changePassword = async (
    body: ChangePasswordPayload
): Promise<ChangePasswordResponse> => {
    return await wisdocityApi.post("auth/change-password", body);
}

export const verifyAccount = async (
    body: VerifyEmailPayload
): Promise<VerifyEmailResponse> => {
    return await wisdocityApi.post("verification/verify", body);
}

export const changeEmail = async (
    body: UpdateEmailPayload
): Promise<UpdateEmailResponse> => {
    return await wisdocityApi.post("verification/change-email", body);
}

export const register = async (
    body: SignUpPayload
): Promise<SignUpResponse> => {
    return await wisdocityApi.post("auth/register", body);
};

export const logout = async () => {
    // todo
    return await wisdocityApi.put("");
};

export const login = async (
    body: SignInPayload
): Promise<SignInResponse> => {
    return await wisdocityApi.post("auth/login", body);
};

export const resendVerification = async (): Promise<SendVerificationResponse> => {
    return await wisdocityApi.get("verification/resend-verification");
};

export const refreshTokens = async (
    body: RefreshPayload
): Promise<RefreshResponse> => {
    return await wisdocityApi.post("users/refresh", body);
};

export const profile = async (): Promise<AuthResponse> => {
    return await wisdocityApi.get("auth/profile");
}

