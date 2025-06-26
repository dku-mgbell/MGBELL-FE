import StepsLayout from '@/components/layout/steps-layout';
import SuccessLayout from '@/components/layout/success-layout';
import { READY_TO_DEPLOY } from '@/constant';

export default function Page() {
  return (
    <StepsLayout
      isNextButtonEnabled
      nextPage={`/store/${READY_TO_DEPLOY === 'true' ? 'order' : 'temp'}`}
      nextButtonText="바로 시작하기"
    >
      <SuccessLayout
        title={
          <>
            마감백 등록이
            <br />
            완료되었습니다.
          </>
        }
      />
    </StepsLayout>
  );
}
