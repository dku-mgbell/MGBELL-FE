import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Pagination } from 'swiper/modules';

export default function Carousel({ images }: { images: string[] }) {
  return (
    <Swiper pagination modules={[Pagination]} className="carousel">
      {images.map((item) => (
        <SwiperSlide key={item}>
          <div
            style={{
              backgroundImage: `url('${item}')`,
              width: '100%',
              height: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
