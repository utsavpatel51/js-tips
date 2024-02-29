'use client';
import Blog from '@/components/common/blog';
import PageHeader from '@/components/common/page-header';
import { allBlogs, blogByCategories } from '@/content';
import { SBlog } from '@/lib/types';
import React from 'react';

export default function Home() {
  const blogData = blogByCategories as { [key: string]: SBlog[] };
  const [blogs, setBlogs] = React.useState<SBlog[]>(allBlogs);
  const [selectedCategory, setSelectedCategory] = React.useState('');

  React.useEffect(() => {
    if (selectedCategory === '') return;
    setBlogs(blogData[selectedCategory]);
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(selectedCategory === category ? '' : category);
  };

  return (
    <>
      <PageHeader
        selectedCategory={selectedCategory}
        onChange={handleCategoryChange}
        categories={Object.keys(blogData) || []}
      />

      <div className='grid gap-5 lg:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]'>
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.slug} />
        ))}
      </div>
    </>
  );
}
