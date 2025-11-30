'use client';

import { useState } from 'react';
import { useRouter, Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useAuthProvider } from '@/components/AuthProvider';
import { Button } from '@/components/ui/button';
import useAuth from '@/hooks/useAuth';

export default function UserProfile() {
  const router = useRouter();
  const t = useTranslations('UserProfile');
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthProvider();
  const { logout } = useAuth();

  const handleLogout = () => {
    setIsOpen(false);
    logout();
    router.push('/');
  };

  if (!user) {
    return (
      <>
        <Link href="/login">
          <Button asChild>
            <span className="truncate">{t('login')}</span>
          </Button>
        </Link>
        <Link href="/register">
          <Button variant="destructive" asChild>
            <span className="truncate">{t('register')}</span>
          </Button>
        </Link>
      </>
    );
  }

  return (
    <div className="relative ml-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-600 transition-colors cursor-pointer"
      >
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
          {user.name?.[0]?.toUpperCase() || user.email[0].toUpperCase()}
        </div>
        <span className="hidden sm:block">{user.name || user.email}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown Menu */}
          <div className="flex flex-col absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-20 text-gray-800">
            <div className="px-4 py-3 border-b border-gray-200">
              <p className="text-sm font-semibold">{user.name || 'User'}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                router.push('/profile');
              }}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {t('profile')}
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                router.push('/settings');
              }}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {t('settings')}
            </button>

            <div className="border-t border-gray-200 my-1" />

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
            >
              {t('logout')}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
