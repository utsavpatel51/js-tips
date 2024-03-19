module.exports = (plop) => {
  plop.setGenerator('blog', {
    description: 'Create a New Blog',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        type: 'input',
        name: 'filename',
        message: 'What is your blog file name?(001-this-is-sample)',
      },
      {
        type: 'list',
        name: 'category',
        choices: ['js'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'content/posts/{{category}}/{{dashCase filename}}.mdx',
        templateFile: 'src/plop-templates/blog.hbs',
      },
    ],
  });
};
