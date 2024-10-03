import TimeSelector from '@/components/time-selector/time-selector';
import { useBagInfoStateStore } from '@/hooks/stores/useBagInfoStore';
import { common } from '@/styles/common.css';
import { ChangeEvent } from 'react';

export default function SaleTimeSelector() {
  const { bagInfoState, setBagInfoState } = useBagInfoStateStore();

  const handleInputChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBagInfoState({ ...bagInfoState, [name]: value });
  };

  return (
    <div
      className={common.flexBox({ direction: 'row', align: 'center', gap: 15 })}
    >
      <TimeSelector
        name="startAt"
        value={bagInfoState.startAt}
        onChange={handleInputChange}
      />
      <span style={{ color: '#AEAEAE' }}>~</span>
      <TimeSelector
        name="endAt"
        value={bagInfoState.endAt}
        onChange={handleInputChange}
      />
    </div>
  );
}
