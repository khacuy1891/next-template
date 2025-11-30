'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import Input from '@/components/ui/input';
import { RegisterFormValues, registerSchema } from '@/lib/zod';
import useAuth from '@/hooks/useAuth';

export default function RegisterPage() {
  const t = useTranslations('RegisterPage');
  const { loading, register: submitRegister } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    mode: 'onChange',
    resolver: zodResolver(registerSchema),
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 shadow-lg rounded-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            {t('title')}
          </h2>
        </div>

        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit(submitRegister)}
        >
          <div className="space-y-4 rounded-md shadow-sm">
            <Input
              id="name"
              type="name"
              label="Full Name"
              placeholder="Full Name"
              autoComplete="name"
              error={errors.name?.message}
              {...register('name')}
            />
            <Input
              id="email"
              type="email"
              label="Email address"
              placeholder="you@example.com"
              autoComplete="email"
              error={errors.email?.message}
              {...register('email')}
            />
            <Input
              id="password"
              type="password"
              label="Password"
              placeholder="••••••"
              autoComplete="current-password"
              error={errors.password?.message}
              {...register('password')}
            />
            <Input
              id="confirm-password"
              type="password"
              label="Confirm Password"
              placeholder="••••••"
              error={errors.confirmPassword?.message}
              {...register('confirmPassword')}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-70"
            >
              {loading ? t('button.signingIn') : t('button.signIn')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
