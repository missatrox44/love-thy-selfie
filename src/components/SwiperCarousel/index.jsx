// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar, Mousewheel } from 'swiper';
import { useMediaQuery } from "@mui/material";


// Import Swiper styles
import 'swiper/swiper-bundle.css';
import './styles.css';

export default function SwiperCarousel(props) {

  const { children } = props;

  const bigScreen = useMediaQuery("(min-width:1024px)");

  return (
    <Swiper
      modules={[Pagination, Mousewheel, Navigation, Scrollbar]}
      spaceBetween={10}
      slidesPerView={bigScreen ? 3.3 : 1.15}
      threshold={2}
      // onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => (window.swiper = swiper)}
      navigation
      mousewheel={{ forceToAxis: true, sensitivity: 0.1, releaseOnEdges: true }}
      pagination={{ clickable: true }}
    >
      {children}
    </Swiper>
  );
};