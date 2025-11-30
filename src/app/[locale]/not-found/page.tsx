import { Metadata } from 'next';
import NotFoundContent from './notfound-content';

export const metadata: Metadata = {
  title: '404 - Trang Không Tìm Thấy',
  description:
    'Trang bạn đang tìm kiếm không tồn tại hoặc có thể đã bị xóa. Quay lại trang chủ hoặc liên hệ hỗ trợ.',
  robots: 'noindex, nofollow',
  openGraph: {
    title: '404 - Trang Không Tìm Thấy',
    description: 'Trang bạn đang tìm kiếm không tồn tại hoặc có thể đã bị xóa.',
    type: 'website',
  },
};

export default function NotFound() {
  return <NotFoundContent />;
}
