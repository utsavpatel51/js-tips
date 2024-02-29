import { BLOG_TEMPLATE_MAP } from '@/lib/constants';
import { Badge } from '../ui/badge';

interface Props {
  selectedCategory: string;
  onChange: (category: string) => void;
  categories: string[];
}

export default function PageHeader(props: Props) {
  return (
    <div className='flex h-16 flex-row items-center gap-x-4'>
      {props.categories.map((category) => (
        <Badge
          variant={
            props.selectedCategory === category ? 'default' : 'secondary'
          }
          className={'cursor-pointer'}
          onClick={() => props.onChange(category)}
          role='button'
          key={category}
        >
          {BLOG_TEMPLATE_MAP[category]}
        </Badge>
      ))}
    </div>
  );
}
