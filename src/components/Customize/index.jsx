import React from 'react';

export default function Customize() {

  return (
    <div className='flex flex-col bg-[#F2D43D]'>
      <img className='center h-44 p-5 md:p-8' src='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png' />

      <h2 className='text-center text-gray-700 text-2xl py-6 px-2 font-semibold'>Customize Your Photos</h2>
      <div className='text-center'>
        <ul className='list-disc'>
          <li>Choose from 12 scenery backgrounds</li>
          <li>Filters</li>
          <li>Custom Frames available</li>
          <li>Tons of props</li>
        </ul>
      </div>
    </div>
  )
}

