import React from 'react';
import assistants from '../../assets/assistants.png'

export default function HighTech() {


  return (
    <div className=''>
      <h2 className='text-center text-2xl py-6 px-2 font-semibold bevan'>High Tech Equipment</h2>
      <div className='flex'>
        <img src={assistants} />
        <ul className='list-disc text-start karla-700'>
          <li>32 in. touch screen monitor</li>
          <li>Green Screen</li>
          <li>Text to phone capabilities</li>
          <li>4x6 on-site great quality prints</li>
        </ul>
      </div>
    </div>
  )
}

