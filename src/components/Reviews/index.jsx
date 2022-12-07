import React from "react";
import ReviewCard from '../ReviewCard';
import ReviewCarousel from '../ReviewCarousel';

export default function Reviews() {

  const reviewContent = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]


  return (
    <div>
      {/* <ReviewCarousel style={{ maxWidth: 1200, marginLeft:'auto', marginRight:'auto', marginTop: 64 }}> */}
      <ReviewCarousel style={{ marginLeft:'auto', marginRight:'auto', marginTop: 64 }}>
        {reviewContent.map((i) => {
          return (
            <ReviewCard key={i} number={i}/>
          )
        })}
      </ReviewCarousel>
    </div>
  )
}

