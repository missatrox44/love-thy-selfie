import React from 'react';
import ReviewCard from '../ReviewCard';
import SwiperCarousel from '../SwiperCarousel';
import { SwiperSlide } from 'swiper/react';
import Star from '../../assets/Star';
import { reviews } from '../../assets/reviews';
import { useMediaQuery } from '@mui/material';

import './styles.css';

export default function Reviews() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const flexClass = isSmallScreen ? 'flex-col' : 'flex';
  const placeContent = isSmallScreen ? 'place-content-center' : 'place-content-start';
  const starMargin = isSmallScreen ? 'mt-2' : 'mb-4';
  const margin = isSmallScreen ? 'mt-2 mb-4' : 'mt-3';

  return (
    <div id='reviews' className='py-6'>
      <p className='text-light text-center text-4xl lg:text-6xl py-5 px-2 font-semibold bevan'>
        Reviews
      </p>
      <div className={`flex place-content-center ${flexClass}`}>
        <p className='mt-3 text-sm md:text-xl karla-700 text-light'>
          Overall Rating:
        </p>
        <div className={`flex text-yellow-500 h-10 ${starMargin} ${placeContent}`}>
          <Star style={'h-[100%] md:h-10'}/>
          <Star style={'h-[100%] md:h-10'}/>
          <Star style={'h-[100%] md:h-10'}/>
          <Star style={'h-[100%] md:h-10'}/>
          <Star style={'h-[100%] md:h-10'}/>
        </div>
        <p className={`${margin} text-sm md:text-2xl karla-700 text-light`}>
          5.0 / 5.0
        </p>
      </div>
      <SwiperCarousel>
      {reviews.map((review, i) => {
          return (
            <SwiperSlide
              key={i}
            >
              <ReviewCard
                name={review.name}
                review={review.review}
                date={review.date}
                picture={review.picture}
              />
            </SwiperSlide>
          );
        })}
      </SwiperCarousel>
    </div>
  );
}
