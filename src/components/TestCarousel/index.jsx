import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from "@mui/material";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './styles.css';


export default function TestCarousel (props) {

  const bigScreen = useMediaQuery("(min-width:1024px)");

    const renderIndicator = (onClickHandler, isSelected, index, label) => {
        return (
            <li
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
            className={isSelected ? "active-indicator" : "indicator"}
            />
        );
      }

    return (
        <Carousel 
          className="test-carousel"
          centerMode
          centerSlidePercentage={bigScreen ? 45 : 85}
          swipeable
          emulateTouch 
          useKeyboardArrows 
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          renderIndicator={renderIndicator}
          props={props}
          showIndicators={bigScreen ? true : false}
        >

          {props.children}

        </Carousel>
  );
}