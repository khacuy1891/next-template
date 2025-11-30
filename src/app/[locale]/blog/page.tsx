import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import StatusBar from '@/components/StatusBar';
import CounterView from '@/components/CounterView';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding React Server Components',
    excerpt:
      'Deep dive into how RSCs change the way we build Next.js applications.',
    date: 'Jan 14, 2026',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS',
    excerpt:
      'Tips and tricks for building beautiful, responsive layouts at speed.',
    date: 'Jan 12, 2026',
    readTime: '4 min read',
  },
  {
    id: '3',
    title: 'State Management in 2026',
    excerpt:
      'Comparing Redux Toolkit, Zustand, and React Context for modern apps.',
    date: 'Jan 10, 2026',
    readTime: '7 min read',
  },
  {
    id: '4',
    title: 'The Future of Web Performance',
    excerpt: 'Core Web Vitals and how to optimize your Next.js app for speed.',
    date: 'Jan 08, 2026',
    readTime: '6 min read',
  },
];

export default function Blog() {
  const t = useTranslations('BlogPage');

  return (
    <div className="flex flex-col gap-8 py-8 w-full max-w-4xl mx-auto px-4">
      <div className="flex flex-col gap-4 border-b pb-6">
        <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
        <p className="text-lg text-gray-600">{t('description')}</p>

        {/* Existing components preserved */}
        <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-lg">
          <CounterView />
          <div className="w-px h-6 bg-gray-300 mx-2"></div>
          <StatusBar />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="group relative flex flex-col gap-3 rounded-lg border p-6 hover:shadow-md transition-shadow bg-white"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <time dateTime={post.date}>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
              <Link href={`/blog/${post.id}`}>
                <span className="absolute inset-0" />
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
            <div className="mt-auto pt-4 text-sm font-medium text-blue-600">
              Read more →
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/"
          className="text-sm font-medium hover:underline text-gray-500"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
