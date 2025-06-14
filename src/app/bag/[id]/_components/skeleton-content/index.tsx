'use client';

import { BagContent } from '../content/components';
import Footer from '../footer';

export default function SkeletonContent() {
  return (
    <>
      <BagContent.Container>
        <BagContent.Images isLoading />
        <BagContent.StoreInfo isLoading />
        <BagContent.Divider />
        <BagContent.Description isLoading />
      </BagContent.Container>
      <Footer />
    </>
  );
}
