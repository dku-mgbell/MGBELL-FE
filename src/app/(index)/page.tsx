import { Suspense } from 'react';
import Container from './_components/container';
import Footer from './_components/footer';
import MainHeader from './_components/header';
import InitialSetter from './initial-setter';
import StoreList from './store-list';
import SkeletonStoreList from './store-list/skeleton';
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
