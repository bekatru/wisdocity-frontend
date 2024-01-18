export interface RefreshResponse {
    status: number;
    data: {
      tokens: {
        access: string;
        refresh: string;
      };
    }
  }
  
  export interface RefreshPayload {
    refreshToken: string;
  }
  