import { ChangeEvent } from 'react';
import ShoppingIcon from '@/assets/svg/ShoppingIcon';
import ToggleSwitch from '@/components/toggle-switch/toggle-switch';
import { useBagInfoStateStore } from '@/hooks/stores/useBagInfoStore';
import { common } from '@/styles/common.css';
import { styles } from './styles.css';

export default function OnSaleButton() {
  const { bagInfoState, setBagInfoState } = useBagInfoStateStore();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setBagInfoState({ ...bagInfoState, onSale: checked });
  };

  return (
    <div className={styles.container}>
      <div
        className={common.flexBox({
          direction: 'row',
          align: 'center',
          gap: 10,
        })}
      >
        <ShoppingIcon />
        마감백 판매
      </div>
      <ToggleSwitch onChange={handleInputChange} value={bagInfoState.onSale} />
    </div>
  );
}
