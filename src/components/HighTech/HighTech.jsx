import React from 'react';
import assistants from '../../assets/assistants.png'
import './styles.css';

export default function HighTech() {


  return (
    <div className=''>
      <h2 className='text-center text-4xl py-6 px-2 font-semibold bevan'>High Tech Equipment</h2>
      <div className='flex justify-around items-center'>
        <img className='w-[50%]' src={assistants} />
        <ul className='text-start karla-700 md:text-xl lg:text-2xl'>
          <li>&hearts; 32 in. touch screen monitor</li>
          <li>&hearts; Green Screen</li>
          <li>&hearts; Text to phone capabilities</li>
          <li>&hearts; 4x6 on-site great quality prints</li>
        </ul>
      </div>
    </div>
  )
}

