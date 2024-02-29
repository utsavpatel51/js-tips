import Image from 'next/image';

interface Props {
  variant: 'fill' | 'half';
  src: string;
  alt: string;
  content?: string;
  caption?: string;
}
export default function ImageBlock(props: Props) {
  if (props.variant === 'half')
    return (
      <div className='flex flex-col items-center px-1 py-4 gap-y-2'>
        <div className='flex flex-row gap-x-4 h-[250px]'>
          <div className='flex-1  border relative'>
            <Image src={props.src} alt={props.alt} fill={true} />
          </div>

          <div className='flex-1 overflow-auto overflow-y-scroll'>
            {props.content}
          </div>
        </div>
        {props.caption && (
          <p className='text-center w-[80%]'>{props.caption}</p>
        )}
      </div>
    );

  return (
    <div className='px-1 py-4'>
      <div className='w-full h-[450px] border relative'>
        <Image src={props.src} alt={props.alt} fill={true} />
      </div>
      {props.caption && (
        <p className='text-center w-[80%] mx-auto'>{props.caption}</p>
      )}
    </div>
  );
}
