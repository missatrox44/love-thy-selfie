import React from 'react';
import BsStarFill from '../../assets/Star';
import './styles.css';
import ImQuotesLeft from '../../assets/LeftQuote';
import ImQuotesRight from '../../assets/RightQuote';

function ReviewCard({ date, review, picture, name }) {
  return (
    <div className='rounded-lg bg-gray-100 px-5 drop-shadow-lg hover:drop-shadow-xl custom-card'>

      {/* <div className='p-4 sm:px-6 lg:px-8 flex place-content-center'>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
      </div> */}

      <div className='flex place-content-start'>
        <p className='ml-5 mt-5'>{date}</p>
      </div>

      <div className='flex place-content-start'>
        {/* <ImQuotesLeft /> */}
        <p className='m-4'>{review}</p>
      </div>
<hr />
      <div className='flex items-center mt-5 space-x-5 place-content-center'>
        <img className='rounded-full w-14 h-14 border-2 border-indigo-400 mb-4' alt='fb profile pic' src={picture} />
        <span className='font-bold'>{name}</span>
      </div>

{/* practice test code */}
      {/* <div class="ml-4">
        <div class="font-bold">David H. Hansson</div>
        <div class="text-sm text-gray-600 mt-1">CTO, <a href="https://timerse.com/7-steps-to-boost-your-metabolism/">Boosting Metabolism</a></div>
      </div> */}


    </div>
  )
}

export default ReviewCard
