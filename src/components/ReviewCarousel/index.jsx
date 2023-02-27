import React from 'react'
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import './styles.css'


const ReviewCarousel = (props) => {

  const { children } = props;

  const bigScreen = useMediaQuery('(min-width:1024px)');

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const [dragStart, setDragStart] = useState(null);
  // const [dragEnd, setDragEnd] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const minDistance = 25; 

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)


  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children])

  const next = () => {
    if (bigScreen && currentIndex < ((length - 1)/3.5)){
      setCurrentIndex(prevState => prevState + 1)
      console.log("curr index", currentIndex)
      console.log("length", ((length - 1)/3));
    } else if (!bigScreen && currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
      console.log("curr index", currentIndex)
      console.log("length", length);
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
    const isLeftSwipe = distance > minDistance;
    const isRightSwipe = distance < -minDistance;
    if (isLeftSwipe || isRightSwipe) {
      isLeftSwipe ? 
        next()
      : 
        prev()
    }
  }

  const onMouseDown = (e) => {
    setDragStart(null);
    // setDragEnd(null);
    // console.log("click start", e.clientX);
    setIsClicked(true);
    setDragStart(e.clientX)
  }

  const onMouseMove = (e) => {
    let distance = 0;
    let temp = e.clientX;
    if (isClicked) {
      // setDragEnd(e.clientX);
      // console.log(e.clientX);
    } else {
      // setDragEnd(null);
    }
    distance = dragStart - temp;
    // console.log("distance", distance);
    // console.log("drag end", temp);
    const dragLeft = distance > minDistance;
    const dragRight = distance < -minDistance;
    if (dragLeft || dragRight) {
      dragLeft ? 
        next()
      : 
        prev()
    }
    return;
    // console.log(e.clientX);
  }

  const onMouseUp = (e) => {
    // setDragEnd(null);
    // setDragStart(null);
    setIsClicked(false); 
    onMouseMove(e);
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
      <div className="carousel-wrapper pt-5 pl-3" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} onMouseDown={onMouseDown} onMouseUp={onMouseUp} 
      // onMouseMove={onMouseMove}
      >

        <div className="carousel-content-wrapper">


          {!bigScreen &&
            <div className="carousel-content"

            // controls how much the carousel moves
            style={{ transform: `translateX(-${currentIndex * 85}%)` }}
          >
            {children}
          </div>

          ||

          bigScreen && 
            <div className="carousel-content"

          // controls how much the carousel moves
              style={{ transform: `translateX(-${currentIndex * 90.9}%)` }}
            >
              {children}

            </div>
          }


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
      </div>
    </div>
  )
}

export default ReviewCarousel

