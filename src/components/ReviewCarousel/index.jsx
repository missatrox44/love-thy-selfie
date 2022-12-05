import React from 'react'
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import './styles.css' 

const ReviewCarousel = (props) => {
  
  const {children} = props;

  const matches = useMediaQuery('(min-width:640px)');

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
    if (children[currentIndex]) {
      console.log(children[currentIndex])
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
  }

    return (
        <div className="carousel-container">
          <span>{`(min-width:600px) matches: ${matches}`}</span>;
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
              style={{ transform: `translateX(-${currentIndex * 100}%) translateX(-10px)`}}

              // style={{ transform: `translateX(-${currentIndex * 305}%)`}}
              >
                {children}
              </div>
            </div>
          {
            (currentIndex + 1) ? 
            // currentIndex < ((length/3)-1) &&
            currentIndex < length-1 &&
            <button onClick={next} className="right-arrow">
              &gt;
            </button>
            :
            <div></div>
          }
          </div>
        </div>
    )
}

export default ReviewCarousel

