import { ChangeEvent } from 'react';
import Image from 'next/image';
import { common } from '@/styles/common.css';
import { ReviewScoreImage } from '@/assets/images/review/bell';
import { ReviewScore, ReviewScoreName } from '@/types/review';
import { styles } from './styles.css';

export default function ReviewScoreSelector({
  checked,
  onChange,
}: {
  checked?: ReviewScore;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={styles.inputContainer}>
      {Object.entries(ReviewScoreName)
        .slice(0, -1)
        .map(([id, name]) => (
          <label key={id} className={styles.input}>
            <input
              type="radio"
              name="review-score"
              value={id}
              checked={id === checked}
              className={common.hidden}
              onChange={onChange}
            />
            <Image
              src={ReviewScoreImage[id as ReviewScore].src}
              alt={`review-score-${id}`}
              className={styles.inputThumbnail}
              width={86}
              height={86}
            />
            <p className={styles.inputName}>{name}</p>
          </label>
        ))}
    </div>
  );
}
