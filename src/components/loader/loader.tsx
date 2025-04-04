import { BeatLoader } from 'react-spinners';
import { colors } from '@/styles/constant';
import * as styles from './styles.css';

export default function Loader() {
  return (
    <div className={styles.overlay}>
      <BeatLoader color={colors.primary} />
    </div>
  );
}
