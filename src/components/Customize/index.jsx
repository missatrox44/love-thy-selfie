import React from 'react';

export default function Customize() {

  return (
    <div id='about' className='flex flex-col mb-9'>
      {/* <img className='center h-44 p-5 md:p-8' src='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png' /> */}

      <h2 className='text-center text-4xl lg:text-6xl py-6 px-2 font-semibold bevan'>Customize your Photos!</h2>
      <div className='flex justify-center'>
        <ul className='karla-700 text-left md:text-xl lg:text-4xl'>
          <li className="lg:my-10">&hearts; Choose from 12 scenery backgrounds</li>
          <li className="lg:my-10">&hearts; Filters</li>
          <li className="lg:my-10">&hearts; Custom Frames available</li>
          <li className="lg:my-10">&hearts; Tons of props</li>
        </ul>
      </div>
    </div>
  )
}

