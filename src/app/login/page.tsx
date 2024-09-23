import Image from 'next/image';
import Link from 'next/link';
import { container, styles } from './styles.css';

import { Google, Naver, Kakao } from '../../assets/images/SNS/SNS-Image';

export default function Page() {
  return (
    <section className={container()}>
      <header className={styles.header} />
      <section className={styles.contentWrapper}>
        <main>
          <div>
            <h2 className={styles.welcomeMessage}>
              안녕하세요 :) <br /> 마감벨입니다.
            </h2>
            <p>로그인을 통해 오늘의 마감벨을 울려보세요!</p>
          </div>
          <form className={styles.form}>
            <input
              className={styles.input}
              placeholder="아이디를 입력하세요."
            />
            <input
              className={styles.input}
              placeholder="비밀번호를 입력하세요"
            />
            <button className={styles.loginButton} type="submit">
              로그인
            </button>
          </form>
          <div className={styles.linkContainer}>
            <Link href="/find/password">비밀번호 찾기</Link>
            <span> | </span>
            <Link href="/sign-up">회원가입</Link>
          </div>
        </main>
        <footer className={styles.footer}>
          <div className={styles.divider}>
            <hr className={styles.hr} />
            <span className={styles.snsLoginTitle}>간편 로그인</span>
            <hr className={styles.hr} />
          </div>
          <div className={styles.buttonContainer}>
            <Image
              src={Kakao.src}
              alt="SNS Login Logo"
              width={45}
              height={45}
            />
            <Image
              src={Google.src}
              alt="SNS Login Logo"
              width={45}
              height={45}
            />
            <Image
              src={Naver.src}
              alt="SNS Login Logo"
              width={45}
              height={45}
              style={{ borderRadius: '100%' }}
            />
          </div>
        </footer>
      </section>
    </section>
  );
}
