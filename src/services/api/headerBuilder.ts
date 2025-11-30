// headerBuilder.ts
type HeaderOptions = {
  auth?: boolean;
  contentType?: 'json' | 'form' | 'multipart';
  extraHeaders?: Record<string, string>;
};

export const buildHeaders = ({
  auth = true,
  contentType = 'json',
  extraHeaders = {},
}: HeaderOptions = {}) => {
  const headers: Record<string, string> = {};

  if (contentType === 'json') {
    headers['Content-Type'] = 'application/json';
  }

  if (contentType === 'form') {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  if (auth) {
    const token = localStorage.getItem('access_token');
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }

  return {
    ...headers,
    ...extraHeaders,
  };
};
