import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

export default function Carousel({ images }: { images?: string[] }) {
  return (
    <Swiper pagination modules={[Pagination]} className="carousel">
      {images &&
        images.map((item, index) => (
          <SwiperSlide key={item}>
            <Image
              src={item}
              alt={`carousel-${item}`}
              width={800}
              height={800}
              priority={index === 0}
              quality={75}
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
