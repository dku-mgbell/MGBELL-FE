'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import BagImage from '@/assets/images/store/bag-confetti.png';
import EarthImage from '@/assets/images/store/save-earth.png';
import { Container, Content } from '../components';

export default function Page() {
  const [transition, setTransition] = useState(false);
  const searchParams = useSearchParams();
  const price = Number(searchParams.get('price'));

  useEffect(() => {
    setTimeout(() => {
      setTransition(true);
    }, 2500);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!transition ? (
        <Container key="bag">
          <Content.Title>주문 요청 완료!</Content.Title>
          <Content.Description>
            가게에서 주문을 확인 중입니다
            <br />
            주문 수락을 기다려주세요
          </Content.Description>
          <Image
            src={BagImage.src}
            width={306}
            height={316}
            alt="bag illustration"
          />
        </Container>
      ) : (
        <Container key="earth">
          <Content.Title>Zero Food Waste 기여</Content.Title>
          <Content.Description>
            마감백 주문을 통하여
            <br />약 {(((price as number) / 5900) * 2).toFixed(1)}kg의 탄소가
            절감되었습니다
            <br />
            (5,900원 마감백 기준 2kg)
          </Content.Description>
          <Image
            src={EarthImage.src}
            width={280}
            height={290}
            alt="earth illustration"
          />
        </Container>
      )}
    </AnimatePresence>
  );
}
