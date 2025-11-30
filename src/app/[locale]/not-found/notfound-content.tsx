'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFoundContent() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400 animate-pulse">
            404
          </h1>
        </div>

        {/* Main Message */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-slate-300 mb-4">
          Có vẻ như đường dẫn này đã đi lạc đâu đó rồi.
        </p>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Trang bạn đang tìm kiếm không tồn tại hoặc có thể đã bị xóa. Vui lòng
          quay lại trang chủ hoặc liên hệ hỗ trợ.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Quay về trang chủ
          </Link>
          <button
            onClick={() => router.back()}
            className="px-8 py-3 border-2 border-slate-400 text-slate-300 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
          >
            Quay lại
          </button>
        </div>

        {/* Additional Links */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-400 mb-4">Điều bạn có thể làm tiếp theo:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/blog"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              Xem Blog
            </Link>
            <span className="text-slate-600">•</span>
            <Link
              href="/login"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              Đăng nhập
            </Link>
            <span className="text-slate-600">•</span>
            <Link
              href="/register"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
