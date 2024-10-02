import Image from 'next/image';
import { StoreName as Store } from '@/types/store';
import { common } from '@/styles/common.css';
import { styles } from './styles.css';
import Thumbnail from '../../../../../mocks/thumbnail.png';

export default function StoreSelector() {
  return (
    <div className={styles.inputContainer}>
      {Object.entries(Store).map(([id, name]) => (
        <label key={id} className={styles.input}>
          <input type="radio" id={id} name="store" className={common.hidden} />
          <Image
            src={Thumbnail}
            alt={`store-${id}`}
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
