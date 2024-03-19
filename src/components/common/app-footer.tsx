import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';

export default function AppFooter() {
  return (
    <footer className='w-full h-20 flex flex-col justify-center items-center gap-y-4 py-12'>
      <div className='flex flex-row items-center gap-x-2'>
        <Link href={'https://github.com/utsavpatel51'} target='_blank'>
          <GithubIcon className='active:scale-105 cursor-pointer hover:text-primary' />
        </Link>
        <Link
          href='https://www.linkedin.com/in/utsav-patel-8a2456160/'
          target='_blank'
        >
          <LinkedinIcon className='active:scale-105 cursor-pointer hover:text-primary' />
        </Link>
        <Link href={'https://x.com/utsavpatel51'} target='_blank'>
          <TwitterIcon className='active:scale-105 cursor-pointer hover:text-primary' />
        </Link>
      </div>
      <div className='flex flex-row items-center gap-x-2'>
        <p>Utsav Patel</p>
        <p>&#x2022;</p>
        <p>
          <span className='text-[12px] mr-1'>&copy;</span>2024
        </p>
      </div>
    </footer>
  );
}
