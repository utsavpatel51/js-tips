import { blogs } from '#site/content';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '../ui/badge';

interface Props {
  blog: (typeof blogs)[0];
}

export default function Blog(props: Props) {
  return (
    <Link
      className='group cursor-pointer px-4 py-4'
      href={props.blog.permalink}
    >
      <article className='flex flex-col gap-y-2'>
        <h2 className='text-xl group-hover:text-primary'>{props.blog.title}</h2>
        <small className='flex flex-row items-center gap-x-2'>
          {props.blog.tags.map((tag) => (
            <Badge
              variant='outline'
              className='text-muted-foreground/80'
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </small>
        <p className='line-clamp-3 text-foreground/80 pt-2'>
          {props.blog.description}
        </p>

        <div className='flex flex-row items-center justify-between text-muted-foreground/80'>
          <time>{props.blog.date}</time>
          <div className='flex flex-row items-center justify-around gap-x-1'>
            <span>Read ({props.blog.metadata.readingTime} min)</span>
            <div className='flex flex-row'>
              <ChevronRightIcon className='opacity-0 h-4 w-4 group-hover:text-primary group-hover:opacity-100 transition-opacity duration-300 -mr-2' />
              <ChevronRightIcon className='opacity-0 h-4 w-4 group-hover:text-primary group-hover:opacity-100 transition-opacity duration-500 -mr-2' />
              <ChevronRightIcon className='opacity-0 h-4 w-4 group-hover:text-primary group-hover:opacity-100 transition-opacity duration-700 -mr-2' />
              <ChevronRightIcon className='opacity-0 h-4 w-4 group-hover:text-primary group-hover:opacity-100 transition-opacity duration-1000' />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
