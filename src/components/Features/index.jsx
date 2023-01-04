import React from 'react';
import BookButton from '../BookButton';
import medal from '../../assets/medal.png';

export default function Features() {
  return (
    <div className='text-center bg-gray-50 text-gray-800 py-20 px-6'>
      <div className='place-content-center flex'>
        <img alt='medal' className='h-48 w-48 mb-5' src={medal} />
      </div>

      <h3 className='text-3xl font-bold mb-8'>Do your 'selfie' a favor and book us!</h3>

      <BookButton />
    </div>


  )
}

