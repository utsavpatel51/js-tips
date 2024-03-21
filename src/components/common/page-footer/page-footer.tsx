import BlogLike from './blog-like';
import BlogShare from './blog-share';

export function PageFooter({ lastUpdated }: { lastUpdated: string }) {
  return (
    <div className='flex flex-row h-12 py-16 items-center justify-between'>
      <div className='text-start h-12 text-muted-foreground'>
        <p className='text-sm'>Last Updated</p>
        <span>{lastUpdated}</span>
      </div>

      <div className='flex h-12 flex-row items-center gap-x-4 md:gap-x-8 border px-10 rounded-full'>
        <BlogLike />
        <BlogShare />
      </div>
    </div>
  );
}
