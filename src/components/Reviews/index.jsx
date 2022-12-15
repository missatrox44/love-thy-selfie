import React from "react";
import ReviewCard from '../ReviewCard';
import ReviewCarousel from '../ReviewCarousel';
import { reviews } from "../../assets/reviews";
import './styles.css';

export default function Reviews() {


  return (
    <div class ="reviews-container">
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

