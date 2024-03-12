import Link from 'next/link';

export default function AppFooter() {
  return (
    <footer className='w-full bg-background'>
      <div className='h-16 w-full flex items-center border-t hover:shadow-sm hover:shadow-primary/20 px-2'>
        <p className='text-sm'>
          Made By{' '}
          <Link
            className='hover:text-primary hover:underline underline-offset-4'
            href='https://github.com/utsavpatel51'
          >
            Utsav
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
