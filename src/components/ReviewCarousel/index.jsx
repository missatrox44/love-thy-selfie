import React from 'react';
import ReviewCard from '../ReviewCard';
import "./styles.css";

export default function ReviewCarousel() {


  return (
    <div className="carousel-container">
      <button className="left-arrow">
        &lt;
      </button>
      <div className="carousel-content-container">
        <ReviewCard />   
      </div>
      <button className="right-arrow">
        &gt;
      </button>

    </div>

  )
}