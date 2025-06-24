import { Suspense } from 'react';
import Container from './_components/container';
import BagDetailContent from './_components/content';
import Header from './_components/header';
import SkeletonContent from './_components/skeleton-content';

interface PageProps {
  params: {
    storeId: string;
  };
}

export default function Page({ params }: PageProps) {
  const { storeId } = params;

  return (
    <Container>
      <Header />
      <Suspense fallback={<SkeletonContent />}>
        <BagDetailContent storeId={storeId} />
      </Suspense>
    </Container>
  );
}
