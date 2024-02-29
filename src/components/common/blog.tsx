import { SBlog } from '@/lib/types';
import Link from 'next/link';
import { Badge } from '../ui/badge';

interface Props {
  blog: SBlog;
}

export default function Blog(props: Props) {
  return (
    <Link
      className='group cursor-pointer rounded-xl border px-4 py-4 hover:bg-gradient-to-tl hover:from-primary/10'
      href={`/${props.blog.category}/${props.blog.slug}`}
    >
      <article className='flex flex-col gap-y-4'>
        <h3 className='text-lg'>{props.blog.title}</h3>
        <small className='flex flex-row items-center gap-x-2 text-muted-foreground/60'>
          <Badge variant='outline' className='text-muted-foreground/60'>
            JavaScript
          </Badge>
          <time>{props.blog.date}</time>
        </small>
        <p className='line-clamp-3 text-muted-foreground'>
          {props.blog.description}
        </p>
      </article>
    </Link>
  );
}
