import { ChangeEvent } from 'react';
import { useBagInfoStateStore } from '@/hooks/stores/useBagInfoStore';
import Input from '@/components/input/input';
import { common } from '@/styles/common.css';
import PriceButton from './price-button';
import { styles } from './styles.css';

export default function PriceContent({
  priceButton,
}: {
  priceButton?: boolean;
}) {
  const { bagInfoState, setBagInfoState } = useBagInfoStateStore();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'costPrice') {
      setBagInfoState({
        ...bagInfoState,
        [name]: Number(value),
        salePrice: Number((Number(value) / 2).toFixed(0)),
      });
    }
  };

  return (
    <div className={styles.contentContainer}>
      <p className={styles.message}>
        잉여 음식을 소비되도록 하기 위해{' '}
        <span>정가의 50% 가격으로 고객들에게 판매하기를 권장</span>
        합니다.
      </p>
      {priceButton && (
        <div className={styles.priceButtonContainer}>
          <PriceButton
            price={900}
            costPrice={2000}
            desc="개별 상품을 부담 없이 판매하고 싶은 사장님께 추천해요. "
          />
          <PriceButton
            price={3900}
            costPrice={8000}
            desc="다채로운 상품을 간편한 가격에 제공하고 싶은 사장님께 추천해요!!"
          />
          <PriceButton
            costPrice={12000}
            price={5900}
            desc="인기 있는 상품을 좋은 가격에 소개하고 싶은 사장님께 추천해요! "
          />
          <PriceButton
            costPrice={16000}
            price={7900}
            desc="다양한 상품을 넉넉하게 담고 싶은 사장님께 추천해요!"
          />
        </div>
      )}
      {priceButton || (
        <div className={common.flexBox({ gap: 10 })}>
          <p className={styles.price}>정가를 입력해주세요.</p>
          <Input
            type="number"
            placeholder="정가를 입력해주세요."
            theme="outline-gray"
            name="costPrice"
            onChange={handleInputChange}
            value={bagInfoState.costPrice}
          />
          <div style={{ height: '10px' }} />
          <p className={styles.price}>할인이 적용된 가격입니다.</p>
          <Input
            type="number"
            placeholder="정가 입력시 할인이 자동적으로 적용됩니다."
            theme="outline-gray"
            name="salePrice"
            onChange={handleInputChange}
            value={bagInfoState.salePrice}
            disabled
          />
        </div>
      )}
    </div>
  );
}
