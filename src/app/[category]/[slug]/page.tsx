import MDX from '@/components/common/mdx';
import { getBlog } from '@/lib/blog';

interface Props {
  params: { category: string; slug: string };
}

export async function generateMetadata({ params }: Props) {
  const data = getBlog(params.category, params.slug);
  return {
    title: data.data.title,
    description: data.data.description,
  };
}

export default function BlogPage({ params }: Props) {
  const data = getBlog(params.category, params.slug);

  return (
    <>
      <h1 className='text-2xl'>{data.data.title}</h1>
      <div className='text-justify leading-7 mb-4'>
        <MDX source={data.content} />
      </div>
    </>
  );
}
