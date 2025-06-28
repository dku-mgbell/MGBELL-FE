'use client';

import StepsLayout from '@/components/layout/steps-layout';
import { Container, Content } from '../components';

export default function Page() {
  return (
    <StepsLayout
      isNextButtonEnabled
      nextPage="/"
      nextButtonText="메인으로 돌아가기"
    >
      <Container key="fail">
        <Content.Title>결제 실패</Content.Title>
        <Content.Description>
          결제 중 오류가 발생하였습니다.
          <br />
          다시 시도해주세요.
        </Content.Description>
      </Container>
    </StepsLayout>
  );
}
