import React from "react";
import ReviewCard from '../ReviewCard';
import ReviewCarousel from '../ReviewCarousel';

export default function Reviews() {

  const reviewContent = [1,2,3,4,5,6,7,8,9]


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

