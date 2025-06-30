import Image from 'next/image';
import confirmOrderImage from '@/assets/images/order/button-click.png';
import randomBreadImage from '@/assets/images/order/random-bread.png';
import { Guide } from '@/components/layout/guide-layout';

function Step1() {
  return (
    <Guide.Step key="1">
      <Image
        src={randomBreadImage.src}
        alt="random-bread"
        width={180}
        height={180}
      />
      <Guide.Title>
        마감백 구성은 <span> 랜덤</span>이에요
      </Guide.Title>
      <Guide.Description>
        개별 메뉴 요청은 사장님께 부담이 될 수 있어요.
        <br />
        무리한 요청이 반복되면 서비스 이용에
        <br />
        제한이 생길 수 있어요
      </Guide.Description>
    </Guide.Step>
  );
}

function Step2() {
  return (
    <Guide.Step key="2">
      <Image
        src={confirmOrderImage.src}
        alt="confirm-order"
        width={180}
        height={180}
      />
      <Guide.Title>
        주문이 <span>확정</span>되어야 수령 가능해요
      </Guide.Title>
      <Guide.Description>
        가게 사정으로 픽업 30분 전까지 주문이 취소될 수 있어요.
        <br />
        주문이 수락되면 마감백 픽업이 가능합니다!
      </Guide.Description>
    </Guide.Step>
  );
}

export const Steps = {
  RandomBread: Step1,
  ConfirmOrder: Step2,
};
