import { CopyButton } from './copy';

interface Props {
  children: React.ReactNode;
  raw: string;
  'data-language': string;
}

export default function CodeBlock({ children, raw, ...props }: Props) {
  const lang = props['data-language'] || 'js';

  return (
    <pre {...props} className={'p-0'}>
      <div
        className={
          'flex flex-row justify-between items-center px-5 py-1 text-sm'
        }
      >
        <span>{lang}</span>
        <CopyButton text={raw} />
      </div>
      {children}
    </pre>
  );
}
