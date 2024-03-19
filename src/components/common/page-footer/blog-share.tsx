'use client';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Share2Icon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SHARE_ACTION = [
  {
    title: 'Share to Linkedin',
    href: `https://www.linkedin.com/sharing/share-offsite/?url=replaceURL`,
  },
];

export default function BlogShare() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const href = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(href);
    setCopied(true);

    setTimeout(() => {
      setIsOpen(false);
    }, 500);

    setTimeout(() => {
      setCopied(false);
    }, 800);
  };

  const handleShareClose = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <Popover open={isOpen}>
      <PopoverTrigger asChild onClick={() => setIsOpen((prev) => !prev)}>
        <Share2Icon className='hover:text-primary cursor-pointer active:scale-105 h-5 w-5' />
      </PopoverTrigger>
      <PopoverContent className='w-46'>
        <ul className='flex flex-col m-0 p-0 list-none gap-y-2'>
          <li
            onClick={handleCopyLink}
            className='cursor-pointer active:scale-105 hover:text-primary'
          >
            {copied ? 'Copied' : 'Copy Link'}
          </li>
          {SHARE_ACTION.map((action, index) => (
            <li
              key={index}
              className='cursor-pointer active:scale-105 hover:text-primary'
            >
              <Link
                href={action.href.replace('replaceURL', href)}
                target='_blank'
                onClick={handleShareClose}
              >
                {action.title}
              </Link>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
