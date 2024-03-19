import { blogs } from '#site/content';
import HomePage from '@/app/page';
import MDXContent from '@/components/common/mdx';
import PageFooter from '@/components/common/page-footer';

interface Props {
  params: { filter: string; slug: string };
}

export default function BlogPage({ params }: Props) {
  if (params.filter === 't')
    return <HomePage type={params.filter} slug={params.slug} />;

  const blog = blogs.filter((blog) => blog.slug === params.slug)[0];
  return (
    <>
      <h1 className='text-2xl'>{blog.title}</h1>
      <div className='text-justify leading-7 mb-4'>
        <MDXContent code={blog.content} />
      </div>
      <PageFooter lastUpdated={blog.lastUpdated} />
    </>
  );
}
