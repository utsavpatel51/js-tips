import { BadgeInfoIcon } from 'lucide-react';
import React from 'react';

export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-muted-foreground/30 py-2 pt-6 px-2 rounded-md -ml-2 border-x-2 border-primary my-2 relative'>
      <div className='h-6 w-6 rounded-full bg-background absolute -top-1 -left-1'></div>
      <BadgeInfoIcon className='h-6 w-6 absolute -top-1 -left-1 text-primary' />
      {children}
    </div>
  );
}
