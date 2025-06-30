import Image from 'next/image';
import BagImage from '@/assets/images/store/bag-confetti.png';
import EarthImage from '@/assets/images/store/save-earth.png';
import { Guide } from '@/components/layout/guide-layout';

function Success() {
  return (
    <Guide.Step key="bag">
      <Guide.Title>주문 요청 완료!</Guide.Title>
      <Guide.Description>
        가게에서 주문을 확인 중입니다
        <br />
        주문 수락을 기다려주세요
      </Guide.Description>
      <Image
        src={BagImage.src}
        width={306}
        height={316}
        alt="bag illustration"
      />
    </Guide.Step>
  );
}

function SavingEarth({ price }: { price: number }) {
  return (
    <Guide.Step key="earth">
      <Guide.Title>Zero Food Waste 기여</Guide.Title>
      <Guide.Description>
        마감백 주문을 통하여
        <br />약 {(((price as number) / 5900) * 2).toFixed(1)}kg의 탄소가
        절감되었습니다
        <br />
        (5,900원 마감백 기준 2kg)
      </Guide.Description>
      <Image
        src={EarthImage.src}
        width={280}
        height={290}
        alt="earth illustration"
      />
    </Guide.Step>
  );
}

export const Steps = {
  Success,
  SavingEarth,
};
