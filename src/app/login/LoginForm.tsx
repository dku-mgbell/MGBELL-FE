'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Loader from '@/components/loader/loader';
import { usePostLogin } from '@/hooks/query/user/usePostLogin';
import { LoginInfo } from '@/types/login';
import { styles } from './styles.css';

export default function LoginForm() {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>();
  const { mutate, isPending, isSuccess } = usePostLogin();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }) as LoginInfo);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginInfo && loginInfo.email && loginInfo.password) {
      mutate(loginInfo!);
    }
  };

  // 로딩 중일 때는 폼을 그대로 표시하고 버튼만 비활성화
  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        className={styles.input}
        placeholder="이메일을 입력하세요."
        onChange={handleInputChange}
        name="email"
        value={loginInfo?.email || ''}
        disabled={isPending || isSuccess}
      />
      <input
        className={styles.input}
        type="password"
        placeholder="비밀번호를 입력하세요."
        onChange={handleInputChange}
        name="password"
        value={loginInfo?.password || ''}
        disabled={isPending || isSuccess}
      />
      <button
        className={styles.loginButton}
        type="submit"
        disabled={isPending || isSuccess}
      >
        {isPending ? '로그인 중...' : '로그인'}
      </button>
      {isPending && <Loader />}
    </form>
  );
}
