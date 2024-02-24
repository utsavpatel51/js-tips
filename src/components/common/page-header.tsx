import Link from 'next/link';
import { badgeVariants } from '../ui/badge';

export default function PageHeader() {
  return (
    <div className='flex h-16 flex-row items-center gap-x-4'>
      <Link href={'#'} className={badgeVariants({ variant: 'secondary' })}>
        JavaScript
      </Link>
      <Link href={'#'} className={badgeVariants({ variant: 'secondary' })}>
        React
      </Link>
    </div>
  );
}
