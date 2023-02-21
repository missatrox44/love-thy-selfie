import React from 'react';
import assistants from '../../assets/assistants.png'
import './styles.css';

export default function HighTech() {


  return (
    <div className="py-20">
      <h2 className='text-center text-2xl lg:text-6xl py-6 px-2 font-semibold bevan'>High Tech Equipment</h2>
      <div className='mx-4 md:mx-0 md:flex justify-center md:justify-evenly items-center'>
        <div className='w-[100%] lg:w-[40%] mb-4 md:mb-0 text-start text-dark italic font-semibold'>
          <img src={assistants} />
          <p className='text-center lg:pt-3 text-sm md:text-xl'>Two assistants to ensure your event runs smoothly</p>
        </div>
        <div className="">
          <ul className='text-start karla-700 text-lg lg:text-4xl w-full tracking-wide'>
            <li className="my-2 lg:my-10">&hearts; 32 in. touch screen monitor</li>
            <li className="my-2 lg:my-10">&hearts; Green Screen</li>
            <li className="my-2 lg:my-10">&hearts; Text to phone capabilities</li>
            <li className="my-2 lg:my-10">&hearts; 4x6 on-site great quality prints</li>
          </ul>  
        </div>
      </div>
    </div>
  )
}

