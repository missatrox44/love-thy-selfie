import React from 'react';
import BookButton from '../BookButton';
import ServiceArea from '../ServiceArea';

export default function Features() {
  return (
    <div className='text-center bg-gray-50 text-gray-800 py-20'>

      <h3 className='text-3xl font-bold mb-8 px-5'>Do your 'selfie' a favor and book us!</h3>

      <BookButton />

      <ServiceArea />
    </div>
  )
}

