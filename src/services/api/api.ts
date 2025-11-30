import toast from 'react-hot-toast';
import { store } from '@/store/store';
import { clearUser } from '@/store/slices/userSlice';
import { clearAccessToken } from '@/store/slices/authSlice';

// API Configuration
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export interface ApiError {
  message: string;
  statusCode: number;
}

export interface ApiResponse<T> {
  data: T;
}

export async function apiFetch<T>(
  url: string,
  options: RequestInit = {},
): Promise<T> {
  const { headers: customHeaders, ...rest } = options;
  const isFormData = rest.body instanceof FormData;
  const headers: HeadersInit = {
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    ...customHeaders,
  };

  const res = await fetch(`${API_BASE_URL}${url}`, {
    method: 'GET',
    headers,
    ...rest,
  });

  if (!res.ok) {
    const error = (await res.json()) as ApiError;
    toast.error(error.message);
    if (error.statusCode === 401) {
      store.dispatch(clearUser());
      store.dispatch(clearAccessToken());
    }
    throw error;
  }

  return res.json() as Promise<T>;
}
