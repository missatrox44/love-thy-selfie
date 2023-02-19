import React from 'react';
import assistants from '../../assets/assistants.png'
import './styles.css';

export default function HighTech() {


  return (
    <div className="pb-20">
      <h2 className='text-center text-4xl py-6 px-2 font-semibold bevan'>High Tech Equipment</h2>
      <div className='flex justify-evenly items-center '>
        <div className='lg:w-[40%] text-start text-dark italic font-semibold'>
          <img src={assistants} />
          <p className='lg:pl-16 lg:pt-3 lg:text-xl'>Two assistants to ensure your event runs smoothly</p>
        </div>
        <div>
          <ul className='text-start karla-700 md:text-xl lg:text-2xl w-full tracking-wide'>
            <li className="lg:my-10">&hearts; 32 in. touch screen monitor</li>
            <li className="lg:my-10">&hearts; Green Screen</li>
            <li className="lg:my-10">&hearts; Text to phone capabilities</li>
            <li className="lg:my-10">&hearts; 4x6 on-site great quality prints</li>
          </ul>  
        </div>
      </div>
    </div>
  )
}

