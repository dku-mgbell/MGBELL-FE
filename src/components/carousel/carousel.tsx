import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

export default function Carousel({ images }: { images: string[] }) {
  return (
    <Swiper pagination modules={[Pagination]} className="carousel">
      {images.map((item) => (
        <SwiperSlide key={item}>
          <Image src={item} alt={`carousel-${item}`} width={800} height={800} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
