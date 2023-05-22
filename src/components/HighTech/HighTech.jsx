import React from 'react';
import assistants from '../../assets/assistants.png'
import assistants2 from '../../assets/assistants2.png'

export default function HighTech() {


  return (
    <div className="py-10 lg:py-20">
      <h2 className='text-center text-2xl lg:text-6xl py-6 px-2 font-semibold bevan'>High Tech Equipment</h2>
      <div className='mx-8 md:mx-0 md:flex justify-center md:justify-evenly items-center'>
        <div className=' lg:w-[40%] mb-4 md:mb-0 text-dark italic font-semibold'>
          <img src={assistants2} />
          {/* <p className='text-center lg:pt-3 text-sm md:text-xl'>Two assistants to ensure your event runs smoothly</p> */}
        </div>
        <div className='flex justify-center'>
          <ul className='karla-700 text-left text-lg md:text-xl lg:text-4xl'>
            <li className="my-2 lg:my-10">	&#9825; 32 in. touch screen monitor</li>
            <li className="my-2 lg:my-10">	&#9825; Green Screen</li>
            <li className="my-2 lg:my-10">&#9825; Text to phone capabilities</li>
            <li className="my-2 lg:my-10">	&#9825; 4x6 on-site great quality prints</li>
          </ul>  
        </div>
      </div>
    </div>
  )
}

