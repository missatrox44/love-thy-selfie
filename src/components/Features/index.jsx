import React from 'react';
import medal from '../../assets/medal.png';

export default function Features() {
  return (
    <div className='text-center bg-gray-50 text-gray-800 py-20 px-6'>
      <div className='place-content-center flex'>
        <img alt='medal' className='h-48 w-48 mb-5' src={medal} />
      </div>

      <h3 className='text-3xl font-bold mb-8'>Do your 'selfie' a favor and book us!</h3>

      <a className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='light' href='#!' role='button'>Book Now!</a>
    </div>


  )
}

