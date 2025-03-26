'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import BagImage from '@/assets/images/store/bag-confetti.png';
import EarthImage from '@/assets/images/store/save-earth.png';
import * as styles from './styles.css';

export default function Page() {
  const [transition, setTransition] = useState(false);
  const searchParams = useSearchParams();
  const price = Number(searchParams.get('price'));

  useEffect(() => {
    setTimeout(() => {
      setTransition(true);
    }, 3000);
  }, []);

  return (
    <div className={styles.container}>
      {!transition ? (
        <>
          <div>
            <Image
              src={BagImage.src}
              width={306}
              height={316}
              alt="bag illustration"
            />
          </div>
          <strong>마감백 주문 요청 완료!</strong>
          <p>
            매장 사장님의 수락을
            <br />
            기다려주세요.
          </p>
        </>
      ) : (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
          className={styles.content}
        >
          <Image
            src={EarthImage.src}
            width={280}
            height={290}
            alt="bag illustration"
          />
          <strong>Zero Food Waste 기여</strong>
          <p>
            이 마감백을 구매함으로써
            <br />약 {(((price as number) / 5900) * 2).toFixed(1)}kg의 탄소가
            절감되었습니다!
            <br />
            (5,900원 마감백 기준 2kg)
          </p>
        </motion.div>
      )}
    </div>
  );
}
