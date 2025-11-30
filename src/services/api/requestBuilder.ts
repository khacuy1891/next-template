import { store } from '@/store/store';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface RequestOptions<TBody = unknown> {
  method?: HttpMethod;
  body?: TBody;
  headers?: HeadersInit;
  credentials?: RequestCredentials;
  auth?: boolean;
}

class RequestBuilder {
  private request: RequestInit = {};

  buildMethod(method: HttpMethod) {
    this.request.method = method;
    return this;
  }

  buildHeaders(headers: HeadersInit = {}) {
    this.request.headers = headers;
    return this;
  }

  credentials() {
    this.request.credentials = 'include';
    return this;
  }

  auth() {
    const { accessToken } = store.getState().auth;
    if (accessToken) {
      this.request.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return this;
  }

  buildBody(payload?: any) {
    this.request.body = payload ? JSON.stringify(payload) : undefined;
    return this;
  }

  buildBodyFile(file?: File) {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      this.request.body = formData;
    }
    return this;
  }

  build() {
    return this.request;
  }
}

export const buildRequest = () => new RequestBuilder();
