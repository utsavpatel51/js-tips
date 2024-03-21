import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Fragment } from 'react';

interface Props {
  items: { title: string; href: string }[];
}
export default function PageBreadcrumb(props: Props) {
  return (
    <Breadcrumb>
      <BreadcrumbList className='list-none p-0 m-0'>
        {props.items.map((item) => (
          <Fragment key={item.title}>
            <BreadcrumbItem>
              <BreadcrumbLink href={item.href} className='hover:text-primary'>
                {item.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className='last:hidden' />
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
