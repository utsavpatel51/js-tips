import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import Callout from './callout';
import CodeBlock from './code-block';
import { Code, Heading, Link, SubHeading } from './heading';
import ImageBlock from './image-block';

export default function MDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{
        ...props.components,
        CodeBlock: (props) => <CodeBlock {...props} />,
        Code: (props) => <Code {...props} />,
        Image: (props) => <ImageBlock {...props} />,
        Heading: (props) => <Heading {...props} />,
        SubHeading: (props) => <SubHeading {...props} />,
        Callout: (props) => <Callout {...props} />,
        Link: (props) => <Link {...props} />,
      }}
    />
  );
}
