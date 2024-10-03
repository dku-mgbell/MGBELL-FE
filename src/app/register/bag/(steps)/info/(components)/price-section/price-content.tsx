import { ChangeEvent, ReactNode } from 'react';
import { useBagInfoStateStore } from '@/hooks/stores/useBagInfoStore';
import Input from '@/components/input/input';
import { common } from '@/styles/common.css';
import PriceButton from './price-button';
import { styles } from './styles.css';

export default function PriceContent({
  message,
  priceButton,
}: {
  message: ReactNode;
  priceButton?: boolean;
}) {
  const { bagInfoState, setBagInfoState } = useBagInfoStateStore();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBagInfoState({ ...bagInfoState, [name]: value });
  };

  return (
    <div className={styles.contentContainer}>
      <p className={styles.message}>{message}</p>
      {priceButton && (
        <div className={styles.priceButtonContainer}>
          <PriceButton
            price={900}
            desc="묶음 형태보다는 갯수로 판매를 선호하시는 사장님에게 추천해요!"
          />
          <PriceButton
            price={3900}
            desc="묶음 형태보다는 갯수로 판매를 선호하시는 사장님에게 추천해요!"
          />
          <PriceButton
            price={5900}
            desc="묶음 형태보다는 갯수로 판매를 선호하시는 사장님에게 추천해요!"
          />
          <PriceButton
            price={7900}
            desc="묶음 형태보다는 갯수로 판매를 선호하시는 사장님에게 추천해요!"
          />
        </div>
      )}
      <div className={common.flexBox({ gap: 10 })}>
        <Input
          type="number"
          placeholder="음식의 정가를 입력해주세요."
          theme="outline-gray"
          name="costPrice"
          onChange={handleInputChange}
        />
        <Input
          type="number"
          placeholder="원하시는 할인가를 입력해주세요."
          theme="outline-gray"
          name="salePrice"
          onChange={handleInputChange}
          value={bagInfoState.salePrice}
        />
      </div>
    </div>
  );
}
