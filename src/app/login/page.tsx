import LoginButtonContainer from './login-button-container';
import * as styles from './styles.css';

export default function Page() {
  return (
    <section className={styles.container}>
      <header className={styles.header} />
      <section className={styles.contentWrapper}>
        <main className="flex flex-col gap-[60px]">
          <div>
            <h2>
              안녕하세요 :) <br /> 마감벨입니다.
            </h2>
            <p>로그인을 통해 오늘의 마감벨을 울려보세요!</p>
          </div>
          <LoginButtonContainer />
        </main>
      </section>
    </section>
  );
}
