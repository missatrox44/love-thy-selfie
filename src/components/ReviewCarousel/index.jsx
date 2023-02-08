import React from 'react'
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import './styles.css'


const ReviewCarousel = (props) => {

  const { children } = props;

  const bigScreen = useMediaQuery('(min-width:1024px)');

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 25; 

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)


  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      isLeftSwipe ? 
        next()
      : 
        prev()
    }
  }

  const indexClickHandler = (e) => {
    //get all index circles
    let indexCircles = document.getElementsByClassName('index-circle');
    for (let i = 0; i < indexCircles.length; i++) {
      indexCircles[i].setAttribute('class', "index-circle mx-1")
    };
    e.target.setAttribute('class', 'index-circle mx-1 index-circle-active')
    let reviewIndex = parseInt(e.target.getAttribute('value'));
    setCurrentIndex(reviewIndex);
    // console.log(reviewIndex)
  }

  return (
    <div className="carousel-container">
      
      <div className="carousel-wrapper pt-5 pl-3" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>

        <div className="carousel-content-wrapper">


          <div className="carousel-content"

            // controls how much the carousel moves
            style={{ transform: `translateX(-${currentIndex * 85}%)` }}
          >
            {children}
          </div>


        </div>
    
      </div>
      <div className="flex justify-center my-5">
        <div className="index-circle mx-1 index-circle-active" value='0' onClick={indexClickHandler}></div>
        <div className="index-circle mx-1" value='1' onClick={indexClickHandler}></div>
        <div className="index-circle mx-1" value='2' onClick={indexClickHandler}></div>
        <div className="index-circle mx-1" value='3' onClick={indexClickHandler}></div>
        <div className="index-circle mx-1" value='4' onClick={indexClickHandler}></div>
        <div className="index-circle mx-1" value='5' onClick={indexClickHandler}></div>
        <div className="index-circle mx-1" value='6' onClick={indexClickHandler}></div>
        <div className="index-circle mx-1" value='7' onClick={indexClickHandler}></div>
      </div>
    </div>
  )
}

export default ReviewCarousel

