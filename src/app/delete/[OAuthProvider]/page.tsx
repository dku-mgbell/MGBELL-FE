'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import HeaderLayout from '@/components/layout/header-layout';
import { Button } from '@/components/ui/button';
import LabeledField from '@/components/ui/labeled-field';
import { usePostOAuthCode } from '@/hooks/query/auth/oauth/usePostOAuthCode';
import { OAuthProviderType } from '@/types/oauth';
import getOAuthLink from '@/utils/getOAuthLink';
import useModal from '@/hooks/useModal';

export default function Page({
  params,
}: {
  params: { OAuthProvider: OAuthProviderType };
}) {
  const router = useRouter();
  const { mutate: postOAuthCode } = usePostOAuthCode({
    action: 'delete',
    OAuthProvider: params.OAuthProvider,
  });
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const { open } = useModal();

  useEffect(() => {
    if (code) {
      postOAuthCode(code);
    }
  }, [code, postOAuthCode]);

  const handleDeleteOAuthAccount = () => {
    open({
      content: '탈퇴하시겠습니까?',
      confirmEvent: () => {
        window.location.href = getOAuthLink(params.OAuthProvider, {
          action: 'delete',
        });
      },
    });
  };

  const handleContinueButtonClick = () => {
    router.push('/');
  };

  return (
    <HeaderLayout
      title="회원 탈퇴"
      previousButtonClickEvent={() => router.back()}
      className="flex flex-col gap-[30px]"
    >
      <LabeledField label="회원 탈퇴시 주의사항">
        <p>회원 탈퇴 전 꼭 확인해 주세요</p>
        <ul>
          <li>
            - 회원 탈퇴 시, 모든 이용 정보 및 구매 이력, 적립금 등은 복구가
            불가능합니다.
          </li>
          <li>
            - 삭제된 계정은 다시 복구할 수 없으며, 동일한 이메일로 재가입해도
            기존 정보는 복원되지 않습니다.
          </li>
          <li>
            - 계정과 연결된 주문, 리뷰, 찜 목록 등 모든 데이터가 즉시
            삭제됩니다.
          </li>
          <li>
            - 진행 중인 주문이나 환불 건이 있는 경우, 먼저 처리 완료 후 탈퇴해
            주세요.
          </li>
        </ul>
      </LabeledField>
      <LabeledField label="회원 탈퇴하시겠습니까?">
        <Button onClick={handleDeleteOAuthAccount} variant="gray-outline">
          탈퇴하기
        </Button>
        <Button onClick={handleContinueButtonClick}>계속 이용하기</Button>
      </LabeledField>
    </HeaderLayout>
  );
}
