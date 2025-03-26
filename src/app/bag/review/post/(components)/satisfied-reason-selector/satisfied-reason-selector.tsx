import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SatisfiedReason, SatisfiedReasonName } from '@/types/review';
import { common } from '@/styles/common.css';
import { styles } from './styles.css';

export default function SatisfiedReasonSelector({
  updateValue,
}: {
  updateValue: Dispatch<SetStateAction<SatisfiedReason[] | undefined>>;
}) {
  const [checked, setChecked] = useState({
    KIND_OWNER: false,
    LOW_PRICE: false,
    ZERO_WASTE: false,
    VARIOUS_KINDS: false,
  });
  const checkedList = Object.entries(checked)
    .filter((item) => item[1])
    .map(([id]) => id) as SatisfiedReason[];

  useEffect(() => {
    updateValue(checkedList);
  }, [checked]);

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputContainer}>
        {Object.entries(SatisfiedReasonName).map(([id, name]) => (
          <label key={id} className={styles.input}>
            <input
              type="checkBox"
              name="satisfied-reason"
              value={id}
              checked={checked ? checked[id as SatisfiedReason] : false}
              className={common.hidden}
              onChange={(e) => {
                if (e.target.checked && checkedList.length === 3) return;
                setChecked({
                  ...checked,
                  [e.target.value]: !checked[e.target.value as SatisfiedReason],
                });
              }}
            />
            <p className={styles.inputName}>{name}</p>
          </label>
        ))}
      </div>
    </div>
  );
}
