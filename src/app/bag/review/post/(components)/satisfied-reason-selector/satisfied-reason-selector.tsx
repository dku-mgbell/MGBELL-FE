import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { common } from '@/styles/common.css';
import { SatisfiedReason, SatisfiedReasonName } from '@/types/review';
import { styles } from './styles.css';

export default function SatisfiedReasonSelector({
  checkedList,
  updateValue,
}: {
  checkedList?: SatisfiedReason[];
  updateValue: Dispatch<SetStateAction<SatisfiedReason[] | undefined>>;
}) {
  const [value, setValue] = useState<SatisfiedReason[] | undefined>();

  useEffect(() => {
    updateValue(value);
  }, [value]);

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputContainer}>
        {Object.entries(SatisfiedReasonName).map(([id, name]) => (
          <label key={id} className={styles.input}>
            <input
              type="checkBox"
              name="satisfied-reason"
              value={id}
              checked={checkedList?.includes(id as SatisfiedReason)}
              className={common.hidden}
              onChange={(e) => {
                setValue(
                  e.target.checked
                    ? [...(value ?? []), e.target.value as SatisfiedReason]
                    : value?.filter((prev) => prev !== e.target.value),
                );
              }}
            />
            <p className={styles.inputName}>{name}</p>
          </label>
        ))}
      </div>
    </div>
  );
}
