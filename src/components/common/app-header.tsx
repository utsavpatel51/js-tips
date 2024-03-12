'use client';
import useScrollTop from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function AppHeader() {
  const isScrolled = useScrollTop(50);

  return (
    <header className='sticky top-0 z-header w-full bg-background'>
      <div
        className={cn(
          'flex h-16 flex-row items-center justify-between gap-x-2 px-2',
          isScrolled && 'border-b shadow-sm shadow-primary/20'
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
