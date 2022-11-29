import React from "react";
import ReviewCard from '../ReviewCard';
import ReviewCarousel from '../ReviewCarousel';

export default function Reviews() {

  const reviewContent = [1,2,3,4,5,6,7,8,9]


  return (
    <div>
      {/* <ReviewCarousel style={{ maxWidth: 1200, marginLeft:'auto', marginRight:'auto', marginTop: 64 }}> */}
      <ReviewCarousel style={{ marginLeft:'auto', marginRight:'auto', marginTop: 64 }}>
        <ReviewCard number={reviewContent[0]}/>
        <ReviewCard number={reviewContent[1]}/>
        <ReviewCard number={reviewContent[2]}/>
        <ReviewCard number={reviewContent[3]}/>
        <ReviewCard number={reviewContent[4]}/>
        <ReviewCard number={reviewContent[5]}/>
        <ReviewCard number={reviewContent[6]}/>
        <ReviewCard number={reviewContent[7]}/>
        <ReviewCard number={reviewContent[8]}/>
      </ReviewCarousel>
    </div>
  )
}

