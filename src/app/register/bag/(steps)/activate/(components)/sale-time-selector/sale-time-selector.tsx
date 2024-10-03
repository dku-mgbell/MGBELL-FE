import TimeSelector from '@/components/time-selector/time-selector';
import { common } from '@/styles/common.css';

export default function SaleTimeSelector() {
  return (
    <div
      className={common.flexBox({ direction: 'row', align: 'center', gap: 15 })}
    >
      <TimeSelector />
      <span style={{ color: '#AEAEAE' }}>~</span>
      <TimeSelector />
    </div>
  );
}
