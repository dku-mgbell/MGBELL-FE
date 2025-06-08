import Image from 'next/image';
import SuccessImage from '@/assets/images/store/success.png';
import StepsLayout from '@/components/layout/steps-layout';

export default function Page() {
  return (
    <StepsLayout nextPage="/login" nextButtonText="확인">
      <div className="absolute-center flex flex-col items-center justify-center gap-[30px]">
        <div className="flex flex-col items-center gap-[8px]">
          <p className="text-h4">매장 등록 완료!</p>
          <p className="text-b1 text-center text-gray4">
            24시간 내에 승인이 완료됩니다.
            <br />
            승인 이후 고객이 앱에서 사장님 가게를
            <br />볼 수 있으며 판매가 시작됩니다.
          </p>
        </div>
        <Image
          className="bg-cover"
          src={SuccessImage.src}
          width={214}
          height={225}
          alt="매장 등록 이미지"
        />
      </div>
    </StepsLayout>
  );
}
