'use client';

import { useRouter } from 'next/navigation';
import Input from '@/components/input/input';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import QuestionContainer from '@/components/question-container/question-container';
import { useGetUserInfo } from '@/hooks/query/user/useGetUserInfo';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import * as styles from './styles.css';

export default function Page() {
  const { data: userInfo, isLoading } = useGetUserInfo();
  const route = useRouter();
  const { OAuthState } = useAuthStore();

  if (isLoading) return <> </>;

  return (
    <HeaderLayout title="계정관리" previousPageLink="/mypage/settings">
      <div className={styles.container}>
        <QuestionContainer
          title="이름"
          content={<Input placeholder={userInfo!.username} disabled />}
        />
        <QuestionContainer
          title="이메일"
          content={<Input placeholder={userInfo!.email} disabled />}
        />
        {OAuthState.isOAuth || (
          <QuestionContainer
            title="비밀번호"
            content={
              <Input
                type="password"
                value="password"
                readOnly
                onClick={() => {
                  route.push('/mypage/settings/account/password');
                }}
              />
            }
          />
        )}
      </div>
    </HeaderLayout>
  );
}
