'use client';

import { useEffect, createContext, useContext, useRef } from 'react';
import { User } from '@/types/auth';
import useAuth from '@/hooks/useAuth';

interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, refreshToken } = useAuth();
  const isInitial = useRef<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (!isInitial.current) {
      refreshToken();
      try {
        interval = setInterval(refreshToken, 1000 * 60 * 15);
      } catch (error) {
        console.error('Interval error:', error);
      }
    }
    isInitial.current = false;

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [refreshToken]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export const useAuthProvider = () => useContext(AuthContext)!;
