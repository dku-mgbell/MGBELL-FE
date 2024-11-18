'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { usePostLogin } from '@/hooks/query/user/usePostLogin';
import { LoginInfo } from '@/types/login';
import { styles } from './styles.css';

export default function LoginForm() {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>();
  const { mutate } = usePostLogin();

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

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        className={styles.input}
        placeholder="이메일을 입력하세요."
        onChange={handleInputChange}
        name="email"
      />
      <input
        className={styles.input}
        type="password"
        placeholder="비밀번호를 입력하세요."
        onChange={handleInputChange}
        name="password"
      />
      <button className={styles.loginButton} type="submit">
        로그인
      </button>
    </form>
  );
}
