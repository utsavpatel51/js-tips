import matter from 'gray-matter';
import path from 'path';

const CONTENT_PATH = path.join(process.cwd(), 'src', 'content');

export const getBlog = (category: string, slug: string) => {
  const fs = require('fs');
  const content = fs.readFileSync(
    path.join(CONTENT_PATH, category, `${slug}.mdx`)
  );
  return matter(content);
};
