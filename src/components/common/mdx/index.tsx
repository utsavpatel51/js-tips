import * as runtime from 'react/jsx-runtime';
import Callout from './callout';
import CodeBlock from './code-block';
import { Code, Heading, Link, SubHeading } from './heading';
import ImageBlock from './image-block';

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const mdxComponents = {
  Code,
  Image: ImageBlock,
  Heading,
  SubHeading,
  Callout,
  Link,
  pre: CodeBlock,
};

interface MdxProps {
  code: string;
}

export default function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={{ ...mdxComponents }} />;
}
