import { apiFetch } from '@/services/api/api';
import { buildRequest } from '@/services/api/requestBuilder';
import { endpoints } from '@/services/endpoints/endpoint';
import type {
  User,
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  UploadAvatarResponse,
} from '@/types/auth';

class AuthService {
  register(payload: RegisterPayload) {
    const request = buildRequest()
      .buildMethod('POST')
      .buildBody({
        ...payload,
        confirmPassword: undefined,
      })
      .build();
    return apiFetch<User>(endpoints.register(), request);
  }

  login(payload: LoginPayload) {
    const request = buildRequest()
      .buildMethod('POST')
      .buildBody(payload)
      .credentials()
      .build();
    return apiFetch<LoginResponse>(endpoints.login(), request);
  }

  profile() {
    const request = buildRequest().auth().build();
    return apiFetch<User>(endpoints.profile(), request);
  }

  refreshToken() {
    const request = buildRequest().buildMethod('POST').credentials().build();
    return apiFetch<LoginResponse>(endpoints.refreshToken(), request);
  }

  logout() {
    const request = buildRequest().buildMethod('POST').build();
    return apiFetch(endpoints.logout(), request);
  }

  uploadAvatar(file: File) {
    const request = buildRequest()
      .buildMethod('POST')
      .buildBodyFile(file)
      .auth()
      .build();
    return apiFetch<UploadAvatarResponse>(endpoints.uploadAvatar(), request);
  }
}

export const authService = new AuthService();
