import { ReactNode, Suspense } from 'react';
import StepsLayout from '@/components/layout/steps-layout';
import Loader from '@/components/loader/loader';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <StepsLayout isNextButtonEnabled nextPage="/order" nextButtonText="확인">
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </StepsLayout>
  );
}
