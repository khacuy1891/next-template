'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Suspense } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from '@/i18n/routing';
import UserProfile from './UserProfile';

export default function Header() {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-border-dark px-6 md:px-10 py-4 bg-white dark:bg-background-dark/80 backdrop-blur-md">
      <div className="flex items-center gap-4 text-primary">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-primary">
            <div className="size-8">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-black dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
              NexusUI
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {t('home')}
            </Link>
            <Link
              className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
              href="#"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
              href="#"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <UserProfile />
        <Suspense fallback={null}>
          <LanguageSwitcher locale={locale} />
        </Suspense>
      </div>
    </header>
  );
}
