'use client';
import { cn } from '@/lib/utils';
import { HeartIcon } from 'lucide-react';
import React from 'react';

export default function BlogLike() {
  const [liked, setLiked] = React.useState(false);
  const [currentLikes, setCurrentLikes] = React.useState(0);

  const submitLike = async () => {
    try {
      setLiked(!liked);
      await fetch('/api', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ liked: !liked }),
      });
      setCurrentLikes((prev) => (!liked ? prev + 1 : prev - 1));
    } catch (error) {
      console.log(error);
      setLiked(liked);
    }
  };

  React.useEffect(() => {
    const fetchCurrentLikes = async () => {
      try {
        const response = await fetch('/api');
        const data = await response.json();
        setCurrentLikes(+data.likes);
        setLiked(!!data.status);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrentLikes();
  }, []);

  return (
    <div className='flex flex-row items-center gap-x-2'>
      <HeartIcon
        className={cn(
          'hover:text-primary cursor-pointer active:scale-105 h-5 w-5',
          liked && 'fill-primary text-primary'
        )}
        onClick={submitLike}
      />
      <span>{currentLikes}</span>
    </div>
  );
}
