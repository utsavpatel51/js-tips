import { Badge } from '../ui/badge';

export default function Blog() {
  return (
    <div className='group cursor-pointer rounded-xl border px-4 py-4 hover:bg-gradient-to-tl hover:from-primary/10'>
      <article className='flex flex-col gap-y-4'>
        <h3 className='text-lg'>How JS Works?</h3>
        <small className='flex flex-row items-center gap-x-2 text-muted-foreground/60'>
          <Badge variant='outline' className='text-muted-foreground/60'>
            JavaScript
          </Badge>
          <time>February 19, 2024</time>
        </small>
        <p className='line-clamp-3 text-muted-foreground'>
          Learn how to perform various transformations on the keys of a
          JavaScript object. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Voluptates sunt accusantium aliquid? Voluptatum quisquam
          repellat quo odit voluptate itaque incidunt quos architecto minus
          praesentium, aliquam officia esse a optio porro.
        </p>
      </article>
    </div>
  );
}
