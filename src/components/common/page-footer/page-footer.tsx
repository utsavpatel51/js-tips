import { epochToReadable } from '@/lib/utils';
import BlogLike from './blog-like';
import BlogShare from './blog-share';

export function PageFooter({ lastUpdated }: { lastUpdated: number }) {
  return (
    <div className='flex flex-row h-16 py-16 items-center justify-between'>
      <div className='text-start h-16'>
        <p className='text-sm'>Last Updated</p>
        <span>{epochToReadable(lastUpdated)}</span>
      </div>

      <div className='flex h-12 flex-row items-center gap-x-8 border px-10 rounded-full'>
        <BlogLike />
        <BlogShare />
      </div>
    </div>
  );
}
