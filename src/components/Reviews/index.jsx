import React from "react";
import Carousel from "../Carousel";
import ReviewCard from '../ReviewCard'

export default function Reviews() {

  const reviewContent = [1,2,3]

  return (
    <div>
      <Carousel style={{ maxWidth: 1200, marginLeft:'auto', marginRight:'auto', marginTop: 64 }}>
        <ReviewCard number={reviewContent[0]}/>
        <ReviewCard number={reviewContent[1]}/>
        <ReviewCard number={reviewContent[2]}/>
      </Carousel>
    </div>
  )
}

