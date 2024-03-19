import { LoaderIcon } from 'lucide-react';

export default function Loading() {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <LoaderIcon className='h-5 w-5 text-white font-bold animate-spin' />
    </div>
  );
}
