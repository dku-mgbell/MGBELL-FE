'use client';

import SignUpLayout from '../(layout)/SignUpLayout';

export default function Page() {
  return (
    <SignUpLayout isNextStepAllowed={false} onNextStep={() => {}}>
      사용자 선택
    </SignUpLayout>
  );
}
