import { blogs } from '#site/content';
import MDXContent from '@/components/common/mdx';
import PageBreadcrumb from '@/components/common/page-breadcrumb';
import PageFooter from '@/components/common/page-footer';

interface Props {
  params: { filter: string; slug: string };
}

export default function BlogPage({ params }: Props) {
  const blog = blogs.filter((blog) => blog.slug === params.slug)[0];
  return (
    <>
      <div className='space-y-1.5 pb-6'>
        <PageBreadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: blog.category, href: `/${blog.category.toLowerCase()}` },
          ]}
        />
        <h1 className='text-3xl'>{blog.title}</h1>
        <p className='text-muted-foreground'>{blog.date}</p>
      </div>
      <div className='text-justify leading-7 mb-4'>
        <MDXContent code={blog.content} />
      </div>
      <PageFooter lastUpdated={blog.lastUpdated} />
    </>
  );
}
