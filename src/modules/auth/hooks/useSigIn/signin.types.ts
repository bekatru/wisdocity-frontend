export interface SignInResponse {
  status: number;
  data: {
    token: string;
  }
}

export interface SignInPayload {
  email: string;
  password: string;
}
