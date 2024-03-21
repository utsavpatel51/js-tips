import HomePage from '@/app/page';

interface Props {
  params: { filter: string };
}

export default function FilterPage({ params }: Props) {
  return <HomePage type={params.filter} />;
}
