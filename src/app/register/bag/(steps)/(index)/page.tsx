import Image from 'next/image';
import BagImage from '@/assets/images/store/bag.png';
import StepsLayout from '@/components/layout/steps-layout';
import LabeledField from '@/components/ui/labeled-field';
import Qna from '../_components/qna';

export default function Page() {
  return (
    <StepsLayout nextPage="/register/bag/info" nextButtonText="마감백 등록하기">
      <div className="flex flex-col gap-[24px] justify-center w-full items-center">
        <div className="flex flex-col gap-[8px] items-center flex-1">
          <Image
            src={BagImage.src}
            width={264}
            height={300}
            alt="마감백 이미지"
          />
          <p>
            당일 남은 음식들을 랜덤으로!
            <br /> 우리가게
            <span>&nbsp;&apos;마감백&lsquo;</span>을 만드세요!
          </p>
        </div>
        <LabeledField label="마감백이란?">
          <Qna />
        </LabeledField>
      </div>
    </StepsLayout>
  );
}
