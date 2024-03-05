'use client';
import { CheckCheckIcon, CopyIcon } from 'lucide-react';
import React from 'react';

interface Props {
  children: React.ReactNode;
  lang: string;
}

export default function CodeBlock({ children, lang }: Props) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = () => {
    const dataBlock = document.getElementById('code-block');

    const textToCopy = (
      dataBlock?.childNodes?.[0].childNodes[0] as unknown as {
        outerText: string;
      }
    ).outerText;

    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
  };

  const handleAway = () => {
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className='group border'>
      <div className='py-1 px-2 flex flex-row justify-end'>
        <span
          className='text-sm cursor-pointer active:scale-110'
          onClick={copyToClipboard}
          onMouseLeave={handleAway}
          role='button'
        >
          {isCopied ? (
            <p className='flex flex-row items-center gap-x-1 text-green-600'>
              COPIED <CheckCheckIcon className='h-4 w-4' />
            </p>
          ) : (
            <p className='flex flex-row items-center gap-x-1'>
              COPY <CopyIcon className='h-3 w-3' />
            </p>
          )}
        </span>
      </div>
      <div
        className='pb-4 px-10 text-start inline-block w-full'
        id='code-block'
      >
        {children}
      </div>
    </div>
  );
}
