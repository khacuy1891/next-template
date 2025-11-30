export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  avatar?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}

export interface RefreshTokenResponse {
  accessToken: string;
}

export interface UploadAvatarResponse {
  message: string;
  url: string;
}
