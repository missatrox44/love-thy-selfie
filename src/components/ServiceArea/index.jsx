import React from 'react';
import medal from '../../assets/medal.png';
import serviceMap from '../../assets/serviceMap.png'
import { useMediaQuery } from '@mui/material';

import './styles.css'

export default function Features() {

  const bigScreen = useMediaQuery('(min-width:1024px)');

  return (
    <div className='justify-content-center text-gray-800 py-10 custom-serviceMap bg-gray-200'>
      {bigScreen && 
        <div className="flex items-center justify-around">
            <img alt='First in West Texas to use a selfie machine medal' className='mb-5 max-w-[30%]' src={medal} />
              <div className="max-w-[30%]">
                <h3 className="text-6xl font-semibold underline underline-offset-auto">Service Area</h3>
                <p className="mb-5 text-3xl pt-5">Midland/Odessa and surrounding areas</p>
              </div>
            <img alt='service map' className='mb-5 max-w-[30%]' src={serviceMap} />
        </div>
      }

      {!bigScreen && 
      <div>
        <div className="flex justify-around">
          <img alt='First in West Texas to use a selfie machine medal' className='mb-5 max-w-[45%] lg:min-w-[33%]' src={medal} />
          <img alt='service map' className='mb-5 max-w-[45%]' src={serviceMap} />
        </div>
        <div className="service-text">
          <h3 className="underline underline-offset-auto font-bold text-2xl tracking-wide">Service Area</h3>
          <p className="mb-5 text-xl">Midland/Odessa and surrounding areas</p>
        </div>
      </div>}
    </div>
  )
}

