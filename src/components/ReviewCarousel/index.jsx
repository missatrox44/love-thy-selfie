import React from "react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

import TestCarousel from "../TestCarousel"

import "./styles.css";

const ReviewCarousel = (props) => {
  const { children } = props;

  const bigScreen = useMediaQuery("(min-width:1024px)");

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const [dragStart, setDragStart] = useState(null);

  const [swipePercentage, setSwipePercentage] = useState(null);
  const [widthTotal, setWidthTotal] = useState(null);
  const [isTouchFinished, setIsTouchFinished] = useState(false);

  const minDistance = 0;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);


  useEffect(() => {
    setLength(children.length);
  }, [children]);


  useEffect(() => {
    styleActiveReviewCardIndicator();
  }, [currentIndex]);

  useEffect(() => {
    const distance = touchStart - touchEnd;
    setSwipePercentage(86 - Math.abs((distance/widthTotal)*100));
    // console.log("swipe %", swipePercentage);
    console.log(widthTotal);
  }, [isTouchFinished])

  const next = () => {
    if (bigScreen && currentIndex < (length - 1) / 3.5) {
      setCurrentIndex((prevState) => prevState + 1);
    } else if (!bigScreen && currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
    setWidthTotal(e.view.screen.availWidth);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    // console.log("swipe %", 85 - Math.abs((distance/widthTotal)*100))
    // setSwipePercentage(85 - Math.abs((distance/widthTotal)*100));
    setIsTouchFinished(!isTouchFinished);
    const isLeftSwipe = distance > minDistance;
    const isRightSwipe = distance < -minDistance;
    if (isLeftSwipe || isRightSwipe) {
      isLeftSwipe ? next() : prev();
    }
  };

  const onMouseDown = (e) => {
    setDragStart(null);
    setDragStart(e.clientX);
  };

  const onMouseMove = (e) => {
    let distance = 0;
    let temp = e.clientX;
    distance = dragStart - temp;
    const dragLeft = distance > minDistance;
    const dragRight = distance < -minDistance;
    if (dragLeft || dragRight) {
      dragLeft ? next() : prev();
    }
    return;
  };

  const onMouseUp = (e) => {
    onMouseMove(e);
  };

  const styleActiveReviewCardIndicator = () => {
    const indices = document.querySelectorAll(".index-circle");
    indices.forEach((circle) => {
      const currValue = circle.getAttribute("value");
      if (currentIndex === parseInt(currValue)) {
        circle.setAttribute("class", "index-circle mx-1 index-circle-active");
      } else {
        circle.setAttribute("class", "index-circle mx-1");
      }
    });
  };

  const indexClickHandler = (e) => {
    let reviewIndex = parseInt(e.target.getAttribute("value"));
    setCurrentIndex(reviewIndex);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper pt-5 pl-3"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <div className="carousel-content-wrapper">
          {(!bigScreen && (
            <div
              className="carousel-content"
              style={{ transform: `translateX(-${currentIndex * swipePercentage}%)` }}
            >
              {children}
            </div>
          )) ||
            (bigScreen && (
              <div
                className="carousel-content"
                style={{ transform: `translateX(-${currentIndex * 90.9}%)` }}
              >
                {children}
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-center my-5">
        <div
          className="index-circle mx-1 index-circle-active"
          value="0"
          onClick={indexClickHandler}
        ></div>
        <div
          className="index-circle mx-1"
          value="1"
          onClick={indexClickHandler}
        ></div>
        <div
          className="index-circle mx-1"
          value="2"
          onClick={indexClickHandler}
        ></div>
        <div
          className="index-circle mx-1"
          value="3"
          onClick={indexClickHandler}
        ></div>
        <div
          className="index-circle mx-1"
          value="4"
          onClick={indexClickHandler}
        ></div>
        <div
          className="index-circle mx-1"
          value="5"
          onClick={indexClickHandler}
        ></div>
        <div
          className="index-circle mx-1"
          value="6"
          onClick={indexClickHandler}
        ></div>
      </div>
    </div>
  );

};

export default ReviewCarousel;
