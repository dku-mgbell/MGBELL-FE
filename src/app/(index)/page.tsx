import { Suspense } from 'react';
import { StoreListSortType } from '@/types/store';
import Container from './_components/container';
import Footer from './_components/footer';
import MainHeader from './_components/header';
import StoreList from './store-list';
import SkeletonStoreList from './store-list/skeleton';

export default function Page({
  searchParams,
}: {
  searchParams: { sort: string };
}) {
  return (
    <>
      <MainHeader sortValue={searchParams.sort as StoreListSortType} />
      <Container>
        <Suspense fallback={<SkeletonStoreList />}>
          <StoreList />
        </Suspense>
        <Footer />
      </Container>
    </>
  );
}
