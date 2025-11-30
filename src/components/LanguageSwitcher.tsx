'use client';

import { usePathname, Link } from '@/i18n/routing';

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();

  return (
    <div className="ml-auto flex gap-2">
      <Link
        href={pathname}
        locale="en"
        className={locale === 'en' ? 'font-bold' : ''}
      >
        EN
      </Link>
      <span>|</span>
      <Link
        href={pathname}
        locale="vi"
        className={locale === 'vi' ? 'font-bold' : ''}
      >
        VI
      </Link>
    </div>
  );
}
