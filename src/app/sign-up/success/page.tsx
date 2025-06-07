import StepsLayout from '@/components/layout/steps-layout';
import SuccessLayout from '@/components/layout/success-layout/success-layout';

export default function Page() {
  return (
    <StepsLayout
      isNextButtonEnabled
      nextPage="/"
      nextButtonText="바로 시작하기"
    >
      <SuccessLayout
        title={
          <>
            마감벨에 오신 것을
            <br />
            환영합니다.
          </>
        }
      />
    </StepsLayout>
  );
}
