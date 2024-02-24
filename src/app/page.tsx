import Blog from '@/components/common/blog';
import PageHeader from '@/components/common/page-header';

export default function Home() {
  return (
    <>
      <PageHeader />

      <div className='grid gap-5 lg:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]'>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </>
  );
}
