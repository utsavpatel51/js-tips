'use client';

import { CheckCheckIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';

export const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className='py-1 px-2 flex flex-row justify-end'>
      <span
        className='text-sm cursor-pointer active:scale-110'
        onClick={copyToClipboard}
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
  );
};
