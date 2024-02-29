import { LinkIcon } from 'lucide-react';
import NextLink from 'next/link';
import React from 'react';

interface CodeProps {
  children: React.ReactNode;
}
export function Code({ children }: CodeProps) {
  return (
    <span className='bg-card-foreground/40 rounded-sm px-1'>{children}</span>
  );
}

interface HeadingProps {
  children: React.ReactNode;
  title: string;
  id: string;
}
export function Heading({ children, ...props }: HeadingProps) {
  return (
    <section>
      <h2
        className='group text-xl font-bold relative py-2 mt-4 text-primary'
        id={props.id}
      >
        <NextLink
          className={
            'opacity-0 absolute -left-6 top-1/2 -translate-y-1/2 group-hover:opacity-100 hover:opacity-100'
          }
          href={`#${props.id}`}
        >
          <LinkIcon className='h-4 w-4' />
        </NextLink>
        {props.title}
      </h2>
      <div className='ml-4'>{children}</div>
    </section>
  );
}

export function SubHeading({ children, ...props }: HeadingProps) {
  return (
    <section>
      <h3
        className='group text-lg font-semibold relative text-white py-2 mt-4'
        id={props.id}
      >
        <NextLink
          className={
            'opacity-0 absolute -left-6 top-1/2 -translate-y-1/2 group-hover:opacity-100 hover:opacity-100'
          }
          href={`#${props.id}`}
        >
          <LinkIcon className='h-4 w-4' />
        </NextLink>
        {props.title}
      </h3>
      <div className='ml-4'>{children}</div>
    </section>
  );
}

interface LinkProps {
  children: React.ReactNode;
  href: string;
}
export function Link({ children, ...props }: LinkProps) {
  return (
    <NextLink
      href={props.href}
      className='text-link hover:underline hover:text-primary'
    >
      {children}
    </NextLink>
  );
}
