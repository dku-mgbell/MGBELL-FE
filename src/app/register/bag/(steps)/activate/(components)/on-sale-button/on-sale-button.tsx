import ShoppingIcon from '@/assets/svg/ShoppingIcon';
import ToggleSwitch from '@/components/toggle-switch/toggle-switch';
import { common } from '@/styles/common.css';
import { styles } from './styles.css';

export default function OnSaleButton() {
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
      <ToggleSwitch />
    </div>
  );
}
