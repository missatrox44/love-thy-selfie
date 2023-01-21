import React from "react";
import ReviewCard from '../ReviewCard';
import ReviewCarousel from '../ReviewCarousel';
import Star from '../../assets/Star'
import { reviews } from "../../assets/reviews";

import './styles.css';

export default function Reviews() {


  return (
    <div class ="reviews-container">
      <p className='text-center text-gray-800 text-3xl lg:text-5xl leading-tight pt-10'>Reviews:</p>
        <div className='text-center text-gray-700 font-light m-4'>
          Here are what some of our amazing customers are
            saying!
        </div>
          <div className='flex place-content-center'>
            <p className='font-bold mr-1'>Overall Rating:</p>
            <div className="flex gap-0.5 text-yellow-500 mb-4 place-content-start h-5 w-5">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>

            <p className='text-xs ml-3'>5.0/5.0</p>
            <p className="ml-3">117 Reviews</p>
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

