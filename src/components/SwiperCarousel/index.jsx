// Import Swiper React components
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar, Mousewheel } from 'swiper';

import { useMediaQuery } from "@mui/material";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
      onSwiper={(swiper) => (window.swiper = swiper)}
      navigation={bigScreen ? true : false}
      pagination={bigScreen ? { clickable: true, dynamicBullets: true } : false}
      centeredSlides={bigScreen ? false : true}
      slidesPerGroupSkip={3}
      grabCursor={true}
      mousewheel={{ forceToAxis: true, sensitivity: 0.1, releaseOnEdges: true }}
    >
      {children}
    </Swiper>
  );
};