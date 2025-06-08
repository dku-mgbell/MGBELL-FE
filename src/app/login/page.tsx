import LoginButtonContainer from './components/login-button-container';

export default function Page() {
  return (
    <section className="bg-primary flex flex-col justify-end pt-[115px]">
      <main className="rounded-t-[24px] bg-white flex flex-col gap-[60px] pt-[50px] px-[20px]">
        <div className="flex flex-col gap-[8px]">
          <h2 className="text-h2">
            안녕하세요 :) <br /> 마감벨입니다.
          </h2>
          <p className="text-b1 text-gray4">
            로그인을 통해 오늘의 마감벨을 울려보세요!
          </p>
        </div>
        <LoginButtonContainer />
      </main>
    </section>
  );
}
