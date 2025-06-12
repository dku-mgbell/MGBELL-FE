import { Suspense } from 'react';
import Container from './_components/container';
import Footer from './_components/footer';
import MainHeader from './_components/header';
import InitialSetter from './initial-setter';
import SkeletonStoreList from './store-list/skeleton-store-list';
import StoreList from './store-list/store-list';
import { IndexPageSearchParams } from './types';

export default function Page({
  searchParams,
}: {
  searchParams: IndexPageSearchParams;
}) {
  return (
    <>
      <InitialSetter searchParams={searchParams} />
      <MainHeader sortValue={searchParams.sort} />
      {!searchParams.isNewUser && (
        <Container>
          <Suspense fallback={<SkeletonStoreList />}>
            <StoreList />
          </Suspense>
          <Footer />
        </Container>
      )}
    </>
  );
}
