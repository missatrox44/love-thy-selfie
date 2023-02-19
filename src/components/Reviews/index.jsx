import React from "react";
import ReviewCard from '../ReviewCard';
import ReviewCarousel from '../ReviewCarousel';
import Star from '../../assets/Star'
import { reviews } from "../../assets/reviews";

import './styles.css';

export default function Reviews() {


  return (
    <div className="reviews-section">
        <p className='text-center pt-6 px-2 review-title'>
          {/* Check out what some of our amazing customers are saying! */}
          Reviews
        </p>
          <div className='flex place-content-center overall-rating'>
            <p className='mt-3 '>Overall Rating:</p>
            <div className="flex text-yellow-500 mb-1 place-content-start h-10 star">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>

            <p className='mt-3'>5.0 / 5.0</p>
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

