import Image from 'next/image';
import RegisterStoreImage from '@/assets/images/store/register-store.png';
import StepsLayout from '@/components/layout/steps-layout';

export default function Page() {
  return (
    <StepsLayout
      nextPage="/register/store/info"
      nextButtonText="매장 등록하기"
      isNextButtonEnabled
    >
      <div className="flex flex-col items-center gap-[30px] absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-full max-w-[450px]">
        <Image
          src={RegisterStoreImage.src}
          width={RegisterStoreImage.width}
          height={RegisterStoreImage.height}
          alt="매장 등록 이미지"
        />
        <h3 className="text-h3 text-center">
          매장 등록은 <br /> 5분 정도 소요돼요!
        </h3>
      </div>
    </StepsLayout>
  );
}
