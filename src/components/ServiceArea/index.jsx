import React from 'react';
import medal from '../../assets/medal.png';
import serviceMap from '../../assets/serviceMap.png'
import { useMediaQuery } from '@mui/material';

import './styles.css'

export default function Features() {

  const bigScreen = useMediaQuery('(min-width:1024px)');

  return (
    <div id='serviceArea' className='justify-content-center custom-serviceMap'>
      {bigScreen && 
      <div className="relative">
        <div className="flex items-center justify-around bg-primary">
            <img alt='First in West Texas to use a selfie machine medal' className='mb-5 max-w-[30%]' src={medal} />
              <div className="max-w-[30%]">
                <h3 className="bevan text-6xl font-semibold">Service Area</h3>
                <p className="mb-5 text-3xl pt-5 karla-700">Midland/Odessa and surrounding areas</p>
              </div>
            <img alt='service map' className='mb-5 max-w-[30%]' src={serviceMap} />
        </div>
        <div className="under-map-triangle custom-angle-shadow"></div>
        <div className="bg-accent2 w-full h-[35px]"></div>
        <div className="under-service-stripe custom-angle-shadow"></div>
      </div>
      }

      {!bigScreen && 
        <div className="relative">
          <div className="service-text bg-accent2 min-h-[100px] pt-[20px]">
              <h3 className="font-bold text-4xl tracking-wide bevan pt-[5px]">Service Area</h3>
              <p className="mb-5 text-sm sm:text-lg karla-700">Midland/Odessa and surrounding areas</p>
            <div className="service-area-shadow"></div>
          </div>
          <div className="service-area-triangle-pink"></div>
          <div className="green-box">
            <div className="service-area-shadow"></div>
          </div>
          <div className="service-area-triangle-green"></div>
          <div className="relative">
            <div className="flex justify-around pt-24">
              <img alt='First in West Texas to use a selfie machine medal' className='max-w-[45%] lg:min-w-[33%]' src={medal} />
              <img alt='service map' className='max-w-[45%]' src={serviceMap} />
            </div>
            <div className="map-background"></div>
          </div>
          <div className="under-map-triangle custom-angle-shadow"></div>
        </div>
      }
    </div>
  )
}

