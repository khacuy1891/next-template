'use client';

import { ChangeEvent, useState } from 'react';
import { useRouter } from '@/i18n/routing';
import Image from 'next/image';
import useAuth from '@/hooks/useAuth';

export default function ProfilePage() {
  const router = useRouter();
  const { user, uploadAvatar } = useAuth();
  const avatarUrl = user?.avatar
    ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${user.avatar}`
    : '/images/avatar.png';
  const [file, setFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>(avatarUrl);

  if (!user) {
    return router.push('/login');
  }

  const handleUploadAvatar = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0];
    if (!file) return;

    setAvatarPreview(URL.createObjectURL(file));
    setFile(file);
  };

  const handleSave = async (): Promise<void> => {
    if (!file) return;
    uploadAvatar(file);
  };

  return (
    <div className="flex overflow-hidden">
      <aside className="w-64 shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark hidden lg:flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">shield_person</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">Profile Admin</h1>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-1">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-[#93adc8] hover:bg-slate-100 dark:hover:bg-[#243647] cursor-pointer">
            <span className="material-symbols-outlined">dashboard</span>
            <p className="text-sm font-medium">Dashboard</p>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">person</span>
            <p className="text-sm font-medium">Profile Settings</p>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-[#93adc8] hover:bg-slate-100 dark:hover:bg-[#243647] cursor-pointer">
            <span className="material-symbols-outlined">security</span>
            <p className="text-sm font-medium">Security</p>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-[#93adc8] hover:bg-slate-100 dark:hover:bg-[#243647] cursor-pointer">
            <span className="material-symbols-outlined">group</span>
            <p className="text-sm font-medium">Team</p>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-[#93adc8] hover:bg-slate-100 dark:hover:bg-[#243647] cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
            <p className="text-sm font-medium">Notifications</p>
          </div>
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 p-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 overflow-hidden"
              data-alt="User avatar of Alex Johnson"
            >
              <Image
                src={avatarUrl}
                alt="User avatar"
                width={40}
                height={40}
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-medium leading-tight first-letter:uppercase">
                {user.name || user.email}
              </h1>
              <p className="text-xs text-[#93adc8]">Premium Admin</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-[#93adc8] cursor-pointer">
              logout
            </span>
          </div>
        </div>
      </aside>
      <main className="flex-1 bg-background-light dark:bg-background-dark">
        <header className="sticky top-0 z-10 flex items-center justify-between bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-8 py-4">
          <div className="flex items-center gap-4">
            <label className="flex flex-col min-w-40 h-10 w-64 lg:w-96">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#1a2632]">
                <div className="text-[#93adc8] flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined text-xl">
                    search
                  </span>
                </div>
                <input
                  className="form-input w-full border-none bg-transparent focus:ring-0 text-slate-900 dark:text-white placeholder:text-[#93adc8] px-4 text-sm"
                  placeholder="Search settings or team members..."
                />
              </div>
            </label>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-[#243647] text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-[#243647] text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:border-slate-700 mx-2"></div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 overflow-hidden"
              data-alt="User avatar small"
            >
              <Image
                src={avatarUrl}
                alt="User avatar"
                width={32}
                height={32}
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </header>
        <div className="max-w-5xl mx-auto py-8 px-8">
          <div className="bg-white dark:bg-[#1a2632] rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 border-4 border-slate-100 dark:border-slate-700 overflow-hidden"
                    data-alt="High resolution profile picture"
                  >
                    <Image
                      src={avatarPreview}
                      alt="User avatar"
                      width={96}
                      height={96}
                      className="object-contain rounded-full"
                      loading="eager"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <span className="material-symbols-outlined text-white">
                      photo_camera
                    </span>
                    <input
                      className="form-input w-full border-none bg-transparent focus:ring-0 text-slate-900 dark:text-white placeholder:text-[#93adc8] px-4 text-sm"
                      type="file"
                      accept="image/*"
                      onChange={handleUploadAvatar}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold first-letter:uppercase">
                      {user.name}
                    </h2>
                    <span className="bg-primary/20 text-primary text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                      Verified
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-[#93adc8] text-sm">
                    {user.email}
                  </p>
                  <p className="text-slate-400 dark:text-[#93adc8]/60 text-xs mt-1 italic">
                    Member since January 2023
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  className="px-4 py-2 bg-primary text-white dark:text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-md shadow-primary/20 cursor-pointer"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
                <button className="px-4 py-2 bg-slate-100 dark:bg-[#243647] text-slate-700 dark:text-white text-sm font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  Discard
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <h3 className="text-lg font-bold">Personal Information</h3>
                  <button className="text-primary text-sm font-medium hover:underline">
                    Edit
                  </button>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Full Name
                    </label>
                    <p className="font-medium first-letter:uppercase">
                      {user.name}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Email Address
                    </label>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Timezone
                    </label>
                    <p className="font-medium">
                      Pacific Time (US &amp; Canada)
                    </p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Phone
                    </label>
                    <p className="font-medium">+1 (555) 000-0000</p>
                  </div>
                  <div className="md:col-span-2 space-y-1">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Bio
                    </label>
                    <p className="text-sm text-slate-600 dark:text-[#93adc8] leading-relaxed">
                      Product designer and system architect. I enjoy building
                      clean, functional user interfaces and robust design
                      systems. Based in San Francisco.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold">Security Settings</h3>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-slate-100 dark:bg-[#243647] size-10 rounded-lg text-slate-600 dark:text-white flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">lock</span>
                      </div>
                      <div>
                        <p className="font-semibold">Password</p>
                        <p className="text-sm text-slate-500 dark:text-[#93adc8]">
                          Last changed 3 months ago
                        </p>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 bg-slate-100 dark:bg-[#243647] text-xs font-bold rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                      Update
                    </button>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-green-100 dark:bg-green-900/30 size-10 rounded-lg text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">
                          verified_user
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">
                            Two-Factor Authentication
                          </p>
                          <span className="text-[10px] bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300 px-1.5 py-0.5 rounded font-bold uppercase">
                            Enabled
                          </span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-[#93adc8]">
                          Secure your account with an extra layer of security
                        </p>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 bg-slate-100 dark:bg-[#243647] text-xs font-bold rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                      Configure
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold">Preferences</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold">
                        Email Notifications
                      </p>
                      <p className="text-xs text-slate-500 dark:text-[#93adc8]">
                        Receive weekly digests
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold">Public Profile</p>
                      <p className="text-xs text-slate-500 dark:text-[#93adc8]">
                        Allow others to see bio
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold">Language</p>
                    </div>
                    <select className="bg-slate-100 dark:bg-[#243647] border-none text-xs font-semibold rounded-lg focus:ring-0 px-2 py-1">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20 p-6 flex flex-col gap-4">
                <div
                  className="w-full h-32 bg-linear-to-br from-primary to-indigo-600 rounded-lg flex items-center justify-center"
                  data-alt="Decorative credit card pattern gradient"
                >
                  <span className="material-symbols-outlined text-white text-5xl opacity-40">
                    credit_card
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-900 dark:text-white text-lg font-bold">
                    Billing Details
                  </p>
                  <p className="text-[#93adc8] text-sm leading-normal">
                    Your next billing date is Oct 12, 2024.
                  </p>
                </div>
                <button className="w-full py-2 bg-primary text-white dark:text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
                  View Invoices
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
