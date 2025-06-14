import { Suspense } from 'react';
import Container from './_components/container';
import BagDetailContent from './_components/content';
import Header from './_components/header';
import SkeletonContent from './_components/skeleton-content';

export default function Page({ params }: { params: { id: number } }) {
  const bagId = Number(params.id);

  return (
    <Container>
      <Header bagId={bagId} />
      <Suspense fallback={<SkeletonContent />}>
        <BagDetailContent bagId={bagId} />
      </Suspense>
    </Container>
  );
}
