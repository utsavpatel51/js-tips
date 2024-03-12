const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');

const CONTENT_PATH = path.join(process.cwd(), 'src', 'content');

function getReadableDate(date) {
  return new Date(date * 1000).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function generateBlogData() {
  const allBlogs = [];
  const blogByCategories = {};
  const categories = fs
    .readdirSync(CONTENT_PATH)
    .filter((item) => !item.includes('.ts'));

  categories.map((category) => {
    const blogData = [];
    const blogs = fs.readdirSync(path.join(CONTENT_PATH, category));
    blogs.map((blog) => {
      const file = matter(
        fs.readFileSync(path.join(path.join(CONTENT_PATH, category, blog)))
      );
      const blogDetail = {
        title: file.data.title,
        description: file.data.description,
        date: getReadableDate(file.data.date),
        lastUpdated: getReadableDate(file.data.lastUpdated),
        epoch: file.data.date,
        slug: file.data.slug,
        category: file.data.category,
      };

      blogData.push(blogDetail);
      allBlogs.push(blogDetail);

      blogByCategories[category] = blogData;
    });
  });

  const console1 = `export const blogByCategories = ${JSON.stringify(blogByCategories)}`;
  const console2 = `export const allBlogs = ${JSON.stringify(allBlogs.slice(-20))}`;
  return `${console1};${console2}`;
}

const data = generateBlogData();

fs.writeFileSync(path.join(CONTENT_PATH, 'index.ts'), data);
