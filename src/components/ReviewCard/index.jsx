import React from 'react';
import Star from '../../assets/Star';
import './styles.css';

function ReviewCard({ review, name }) {
  return (
    // <div className='border-2 mr-1 min-w-full md:min-w-[50%] lg:min-w-[33%] flex custom-card'>

    <div className='px-1 max-w-[85%] md:max-w-[50%] lg:max-w-[30%] flex custom-card'>
      <blockquote className='flex h-full flex-col justify-between bg-white p-5 rounded-2xl'>
        <div className='flex h-full items-center'>
          <div className='mt-4 flex pl-2'>
            <p className='leading-relaxed text-gray-500 text-left karla-400'>
              <span className='text-4xl text-pink-600'>&ldquo;</span>
              {review}
            </p>
          </div>
        </div>

        <div className='mt-4 border-t-2 flex justify-between'>
          <div>
            <div className='font-extrabold mt-8 mb-2 text-sm text-gray-500 place-content-start karla-800'>
              {name}
            </div>
            <div className='flex text-yellow-500 text-sm place-content-start custom-star'>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>

          <div className='flex flex-col place-content-end'>
            <a
              href='https://www.facebook.com/people/Love-Thy-Selfie-Photo-Booth/100063804810096/?sk=reviews'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                className='w-14 h-14'
                fill='#1877F2'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
            <p className='text-xs text-slate-400 ml-1'>Verified</p>
          </div>
        </div>
      </blockquote>
    </div>
  );
}

export default ReviewCard;
