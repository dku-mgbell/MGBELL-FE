'use client';

import { useGetBagDetail } from '@/hooks/query/bag/useGetBagDetail';
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  const bagId = Number(params.id);
  const { data } = useGetBagDetail(bagId);

  return <>bag {data && data.bagName} detail</>;
}
