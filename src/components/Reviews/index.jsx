import React from "react";
import ReviewCard from '../ReviewCard';
import ReviewCarousel from '../ReviewCarousel';
import Star from '../../assets/Star'
import { reviews } from "../../assets/reviews";

import './styles.css';

export default function Reviews() {


  return (
    <div id='reviews' className ="reviews-section">
        <p className='text-[#FFF9F4] text-center text-4xl py-6 px-2 font-semibold bevan'>
          Reviews
        </p>
          <div className='flex place-content-center'>
            <p className='mt-3 text-sm md:text-xl karla-700 text-[#FFF9F4]'>Overall Rating:</p>
            <div className="flex text-yellow-500 mb-4 place-content-start h-10">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className='mt-3 text-sm md:text-2xl karla-700 text-[#FFF9F4]'>5.0 / 5.0</p>

            </div>
      <ReviewCarousel style={{ marginLeft:'auto', marginRight:'auto', marginTop: 64 }}>

        {reviews.map((review, i) => {
          return (
            <ReviewCard key={i} name={review.name} review={review.review} date={review.date} picture={review.picture}/>
          )
        })}
      </ReviewCarousel>
    </div>
  )
}

