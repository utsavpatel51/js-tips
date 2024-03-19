'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function AppHeader() {
  return (
    <header className='w-full'>
      <div
        className={cn(
          'flex h-16 flex-row items-center justify-between gap-x-2 px-2'
        )}
      >
        <Link href={'/'}>
          <Image src={'/logo.svg'} alt='App Logo' width={82} height={82} />
        </Link>

        <Link href={'https://github.com/utsavpatel51/js-tips'}>
          <Image src={'/github.svg'} alt='Github Logo' width={24} height={24} />
        </Link>
      </div>
    </header>
  );
}
