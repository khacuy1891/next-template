'use client';

import { useDispatch, useSelector } from 'react-redux';
import { clearAccessToken, setAccessToken } from '@/store/slices/authSlice';
import { clearUser, setUser } from '@/store/slices/userSlice';
import { authService } from '@/services/auth.service';
import { LoginPayload } from '@/types/auth';
import toast from 'react-hot-toast';
import { useState, useCallback } from 'react';
import { useRouter } from '@/i18n/routing';
import { RootState } from '@/store/store';
import { RegisterFormValues } from '@/lib/zod';

function useAuth() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);

  const login = useCallback(
    async (data: LoginPayload) => {
      setLoading(true);
      try {
        const result = await authService.login(data);
        if (result.accessToken) {
          dispatch(setAccessToken(result.accessToken));
          dispatch(setUser(result.user));
          toast.success('Login successful! Welcome back.');
          // Redirect to home page
          router.push('/');
        } else {
          toast.error('Login failed');
        }
      } catch (err) {
        console.error('Login error:', err);
      } finally {
        setLoading(false);
      }
    },
    [dispatch, router],
  );

  const register = useCallback(async (data: RegisterFormValues) => {
    setLoading(true);

    try {
      const user = await authService.register(data);
      if (user) {
        toast.success('Register successful!');
        // Redirect to home page
        router.push('/login');
      } else {
        toast.error('Register failed: No user data received');
      }
    } catch (err) {
      console.error('Register error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    dispatch(clearAccessToken());
    dispatch(clearUser());
  }, [dispatch]);

  const getProfile = useCallback(async () => {
    try {
      const userResult = await authService.profile();
      dispatch(setUser(userResult));
    } catch (error) {
      console.error('Get profile failed:', error);
      logout();
    }
  }, [dispatch, logout]);

  const refreshToken = useCallback(async () => {
    setLoading(true);
    try {
      const result = await authService.refreshToken();
      if (result.accessToken) {
        dispatch(setAccessToken(result.accessToken));
        dispatch(setUser(result.user));
      } else {
        toast.error('Refresh token failed');
      }
    } catch (err) {
      console.error('Refresh token error:', err);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  const uploadAvatar = useCallback(
    async (file: File): Promise<void> => {
      const res = await authService.uploadAvatar(file);
      toast.success(res.message);
      if (user) {
        dispatch(setUser({ ...user, avatar: res.url }));
      }
    },
    [dispatch, user],
  );

  return {
    loading,
    user,
    login,
    register,
    getProfile,
    refreshToken,
    uploadAvatar,
    logout,
  };
}

export default useAuth;
