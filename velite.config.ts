import rehypePrettyCode from 'rehype-pretty-code';
import { visit } from 'unist-util-visit';
import { defineConfig, s } from 'velite';

const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      const [codeEl] = node.children;
      if (codeEl.tagName !== 'code') return;

      node.raw = codeEl.children?.[0].value;
    }
  });
};

const postProcess = () => (tree: any) => {
  visit(tree, 'element', (node) => {
    if (node?.type === 'element' && node?.tagName === 'figure') {
      if (!('data-rehype-pretty-code-figure' in node.properties)) {
        return;
      }

      for (const child of node.children) {
        if (child.tagName === 'pre') {
          child.properties['raw'] = node.raw;
        }
      }
    }
  });
};

const count = s
  .object({ total: s.number(), posts: s.number() })
  .default({ total: 0, posts: 0 });

const blogs = {
  name: 'Blog',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug('blog'),
      category: s.string().default('missing'),
      tags: s.array(s.string()).default(['missing']),
      date: s.string(),
      lastUpdated: s.string(),
      description: s.string(),
      metadata: s.metadata(),
      excerpt: s.excerpt(),
      content: s.mdx(),
    })
    .transform((blog) => ({
      ...blog,
      permalink: `/${blog.category.toLowerCase()}/${blog.slug}`,
    })),
};

/**
const categories = {
  name: 'Categories',
  pattern: '-',
  schema: s
    .object({
      name: s.string(),
      slug: s.string(),
      count,
    })
    .transform((data) => ({ ...data, permalink: `/${data.slug}` })),
};
 */
const tags = {
  name: 'Tags',
  pattern: '-',
  schema: s
    .object({
      name: s.string(),
      slug: s.string(),
      count,
    })
    .transform((data) => ({ ...data, permalink: `/${data.slug}` })),
};

export default defineConfig({
  root: 'content',
  collections: { blogs, tags },

  prepare: ({ blogs, tags }) => {
    // const categoriesFromBlogs = Array.from(
    //   new Set(blogs.map((item) => item.category))
    // ).filter((i) => categories.find((j) => j.name === i) == null);

    // categories.push(
    //   ...categoriesFromBlogs.map((name) => ({
    //     name,
    //     slug: name.toLocaleLowerCase(),
    //     permalink: '',
    //     count: { total: 0, posts: 0 },
    //   }))
    // );

    // categories.forEach((i) => {
    //   i.count.posts = blogs.filter((j) => j.category === i.name).length;
    //   i.count.total = i.count.posts;
    //   i.permalink = `/${i.slug}`;
    // });

    const TagsFromDoc = Array.from(
      new Set(blogs.map((item) => item.tags).flat())
    ).filter((i) => tags.find((j) => j.name === i) == null);

    tags.push(
      ...TagsFromDoc.map((name) => ({
        name,
        slug: name.toLowerCase(),
        permalink: '',
        count: { total: 0, posts: 0 },
      }))
    );

    tags.forEach((i) => {
      i.count.posts = blogs.filter((j) => j.tags.includes(i.name)).length;
      i.count.total = i.count.posts;
      i.permalink = `/${i.slug}`;
    });
  },
  mdx: {
    rehypePlugins: [
      preProcess,
      [rehypePrettyCode, { theme: 'github-dark' }],
      postProcess,
    ],
  },
});
