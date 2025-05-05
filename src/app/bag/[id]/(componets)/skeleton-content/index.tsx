import Button from '@/components/button/text-button/button';
import Carousel from '@/components/carousel/carousel';

import NumberInput from '@/components/input/number/number-input';
import Loader from '@/components/loader/loader';
import * as styles from '../../styles.css';

export default function SkeletonContent() {
  return (
    <>
      <Loader />
      <div className={styles.carousel}>
        <Carousel images={[]} />
      </div>
      <div className={styles.sheet} />

      <footer className={styles.footer}>
        <NumberInput className={styles.numberInput} />
        <Button
          value="로딩 중..."
          theme="primary"
          className={styles.orderButton}
        />
      </footer>
    </>
  );
}
