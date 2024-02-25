'use client';
import useScrollTop from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function AppHeader() {
  const isScrolled = useScrollTop(50);

  return (
    <header className='sticky top-0 z-header w-full bg-background pb-4'>
      <div
        className={cn(
          'flex h-16 flex-row items-center justify-between gap-x-2 px-2',
          isScrolled && 'border-b shadow-sm shadow-primary/20'
        )}
      >
        <Image src={'/logo.svg'} alt='App Logo' width={82} height={82} />
        <Image src={'/github.svg'} alt='Github Logo' width={24} height={24} />
      </div>
    </header>
  );
}
