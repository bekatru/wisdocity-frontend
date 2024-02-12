interface Token {
    token: string;
}

interface Tokens {
    access_token: string;
    refresh_token: string;
}

interface Email {
    email: string;
}

interface Credentials extends Email {
    password: string;
}

export interface ResetPasswordResponse { }
export interface ResetPasswordPayload extends Email { }

export interface ChangePasswordResponse { }
export interface ChangePasswordPayload extends Token {
    password: string;
}

export interface VerifyEmailResponse { }
export interface VerifyEmailPayload extends Token {
    token: string;
}

export interface UpdateEmailResponse extends Tokens { }
export interface UpdateEmailPayload extends Email { }

export interface SignUpResponse extends Tokens { }
export interface SignUpPayload extends Credentials {
    username: string;
    country: string;
    current_role: string;
    is_subscribed: boolean;
}

export interface SignInResponse extends Tokens { }
export interface SignInPayload extends Credentials { }

export interface SendVerificationResponse { }

export interface RefreshResponse extends Credentials { }
export interface RefreshPayload extends Token { }

export interface AuthResponse extends Email {
    username: string;
    current_role: string;
    is_verified: boolean;
}

