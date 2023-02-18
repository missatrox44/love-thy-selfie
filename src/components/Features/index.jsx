import React from 'react';
import LandingScreen from '../LandingScreen';
import BookButton from '../BookButton';
import ServiceArea from '../ServiceArea';
import Customize from '../Customize';
import HighTech from '../HighTech/HighTech';
import Props from '../Props/Props';
import Events from '../Events/Events';
import PhotoGallery from '../PhotoGallery';

export default function Features() {
  return (
    <div className='text-center bg-gray-50 text-gray-800'>
      
      <LandingScreen />
      <ServiceArea />
      <Customize />
      <HighTech />
      <Props/>
      {/* <Events/> */}
      <div className='lg:mx-5'>
      {/* <h2 className='text-center text-gray-700 text-2xl font-semibold mt-5'>Events</h2> */}
      <PhotoGallery />
      </div>
      

    </div>
  )
}

