import { Suspense } from 'react';
import Container from './_components/container';
import BagDetailContent from './_components/content';
import Header from './_components/header';
import SkeletonContent from './_components/skeleton-content';

export default function Page({ params }: { params: { id: string } }) {
  const storeId = params.id;

  return (
    <Container>
      <Header />
      <Suspense fallback={<SkeletonContent />}>
        <BagDetailContent storeId={storeId} />
      </Suspense>
    </Container>
  );
}
