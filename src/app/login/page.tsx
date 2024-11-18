'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import LoginForm from './LoginForm';
import SNSLogin from './SNSLogin';
import { container, styles } from './styles.css';

export default function Page() {
  const { logout } = useAuth();
  useEffect(() => {
    logout({ withoutRedirect: true });
  }, []);
  return (
    <section className={container()}>
      <header className={styles.header} />
      <section className={styles.contentWrapper}>
        <main>
          <div>
            <h2>
              안녕하세요 :) <br /> 마감벨입니다.
            </h2>
            <p>로그인을 통해 오늘의 마감벨을 울려보세요!</p>
          </div>
          <LoginForm />
          <div className={styles.linkContainer}>
            <Link href="/find/password">비밀번호 찾기</Link>
            <span> | </span>
            <Link href="/sign-up">이메일 회원가입</Link>
          </div>
        </main>
        <footer className={styles.footer}>
          <div className={styles.divider}>
            <hr className={styles.hr} />
            <span className={styles.snsLoginTitle}>간편 로그인</span>
            <hr className={styles.hr} />
          </div>
          <SNSLogin />
        </footer>
      </section>
    </section>
  );
}
