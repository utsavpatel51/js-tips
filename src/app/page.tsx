'use client';
import { blogs, tags } from '#site/content';
import Blog from '@/components/common/blog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

interface Props {
  type?: string;
  slug?: string;
}

export default function HomePage(props: Props) {
  const data = blogs
    .filter((blog) => {
      if (props.type === 't')
        return blog.tags
          .map((b) => b.toLowerCase())
          .includes(props.slug?.toLowerCase() || '');

      return true;
    })
    .sort((a, b) =>
      new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1
    );

  return (
    <div className='flex flex-col space-y-2'>
      <div className='w-full pt-8 pb-4'>
        <p>
          Welcome to JS Tips, your go-to spot for all things related to
          <span className='text-primary'> JavaScript!</span> As a frontend
          enthusiast, I&apos;m constantly on the lookout for new ideas and
          emerging technologies. Join me on this blog as I share my experiences,
          discoveries, and deep dives into the ever-evolving world of frontend
          development. Let&apos;s embark on this journey together!
        </p>
      </div>

      <Separator />
      <div className='flex flex-col-reverse md:flex-row space-x-4'>
        {/* Blogs */}
        <div className='flex-1'>
          <div className='flex flex-col space-y-6'>
            {data.map((blog) => (
              <Blog blog={blog} key={blog.slug} />
            ))}
          </div>
        </div>
        <div className='md:basis-1/3 py-2'>
          <div className='sticky top-10 flex flex-col gap-y-8'>
            {/* Tags Filter */}
            <div>
              <h3 className='text-lg mb-4 max-md:hidden'>Tags</h3>
              <div className='flex flex-row flex-wrap gap-2'>
                {tags.map((tag) => (
                  <Link href={`/t/${tag.slug}`} key={tag.slug}>
                    <Badge
                      variant={
                        props.type === 't' && props.slug === tag.slug
                          ? 'default'
                          : 'secondary'
                      }
                    >
                      {tag.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
