export interface SignUpResponse {
    status: number;
    token: {
      access: string,
      refresh: string,
    };
    userId: number,
}

export interface SignUpPayload {
  email: string;
  password: string;
  full_name: string;
  country: string;
  isSendMessage: boolean;
  current_role: string;
}
