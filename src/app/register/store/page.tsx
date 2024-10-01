import Input from '@/components/input/input';
import HeaderLayout from '@/components/layout/header-layout';
import QuestionContainer from '@/components/question-container/question-container';
import { styles } from './styles.css';

export default function Page() {
  return (
    <HeaderLayout title="매장 등록">
      <div className={styles.container}>
        <QuestionContainer
          title="매장 이름"
          desc="체인점일 경우, 지점명까지 입력해주세요!"
          content={<Input placeholder="ex) 나리네 상점 / 보정동점" />}
        />
        <QuestionContainer
          title="매장 주소"
          desc="클릭하여 주소를 입력해주세요!"
          content={
            <>
              <Input placeholder="클릭하여 주소를 입력해주세요." />
              <Input placeholder="세부 주소 입력" />
            </>
          }
        />
        <QuestionContainer
          title="매장 업종 선택"
          desc={
            <>
              나의 매장에 해당되는 항목을 체크해주세요.
              <span className={styles.primaryText}>(택1)</span>
            </>
          }
          content={<>매장 업종 선택</>}
        />
        <QuestionContainer
          title="매장 음식 사진"
          desc={
            <>
              <span className={styles.darkGrayText}>
                우리의 멋진 매장을 홍보할 음식 사진이 필요해요.
              </span>
              <br />
              지금 당장 업로드 할 사진이 없다면 비워두셔도 괜찮아요! 저희
              마감벨이 네이버에서 가장 예쁘게 나온 사진을 가져와 업로드
              하겠습니다!
              <span className={styles.primaryText}>
                (3장의 사진이 필요해요.)
              </span>
            </>
          }
          content={<>매장 음식 사진</>}
        />
      </div>
    </HeaderLayout>
  );
}
