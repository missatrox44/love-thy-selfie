import React from 'react'
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import './styles.css'

import BsStarFill from '../../assets/Star';

const ReviewCarousel = (props) => {

  const { children } = props;

  const bigScreen = useMediaQuery('(min-width:640px)');

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

  return (
    <div className="carousel-container">
      {/* media query VVVVV*/}
      {/* <span>{`big screen (min-width:640px): ${bigScreen}`}</span> */}
      <p className='text-center text-gray-800 text-6xl lg:text-5xl leading-tight'>Reviews:</p>
      <div className='text-center text-gray-700 font-light m-4'>Here are what some of our amazing customers are
          saying!</div>
      <div className='flex place-content-center'>
        <p className='font-bold mr-3'>Overall Rating:</p>

        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <p className='text-xs ml-3'>5.0/5.0</p>
      </div>

      <div className="carousel-wrapper">
        {
          currentIndex > 0 &&
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        }
        <div className="carousel-content-wrapper">
          <div className="carousel-content"

            //the transform below controls how much the carousel moves
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        {
          //if it's a big screen 
          bigScreen && (currentIndex < ((length / 3) - 1)) &&
          <button onClick={next} className="right-arrow">
            &gt;
          </button>

          ||

          //if it's not a big screen 
          !bigScreen && (currentIndex < length - 1) &&
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        }
      </div>
    </div>
  )
}

export default ReviewCarousel

