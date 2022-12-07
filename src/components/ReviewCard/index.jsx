import React from 'react';
import BsStarFill from '../../assets/Star';
import './styles.css';


function ReviewCard({date, review, picture, name}) {
  return (
    <div className='rounded-lg bg-gray-100 p-5 drop-shadow-lg hover:drop-shadow-xl custom-card'>

      <div className='p-4 sm:px-6 lg:px-8 flex place-content-center'>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
      </div>

      <div className='flex place-content-start'>
        <p className='ml-5'>{date}</p>
      </div>


      <p className='m-4'>{review}</p>

      <div className='flex items-center mt-5 space-x-5 place-content-center'>
        <img className='rounded-full w-12' alt='fb profile pic' src={picture} />
        <span className='font-bold'>{name}</span>
      </div>

    </div>
  )
}

export default ReviewCard
