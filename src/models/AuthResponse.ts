interface AuthResponse {
  type: string;
  body?: {
    uid: string;
    name: string;
    email: string;
  };
  message?: string;
}

export default AuthResponse;
