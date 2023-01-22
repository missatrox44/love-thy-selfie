import React from "react";
import ReviewCard from '../ReviewCard';
import ReviewCarousel from '../ReviewCarousel';
import Star from '../../assets/Star'
import { reviews } from "../../assets/reviews";

import './styles.css';

export default function Reviews() {


  return (
    <div class ="reviews-container">
      {/* <p className='text-center text-gray-800 text-5xl leading-tight pt-10 font-semibold'>Reviews</p> */}
        <p className='text-center text-gray-700 text-2xl my-6 mx-2 font-semibold'>
          Here are what some of our amazing customers are
            saying!
        </p>
          <div className='flex place-content-center mt-5'>
            <p className='mt-3 text-sm'>Overall Rating:</p>
            <div className="flex text-yellow-500 mb-4 place-content-start h-10">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>

            <p className='mt-3 text-sm'>5.0 / 5.0</p>
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

