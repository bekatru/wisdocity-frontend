export interface SignInResponse {
  token: {
    access: string;
    refresh: string;
  }
}

export interface SignInPayload {
  email: string;
  password: string;
}
