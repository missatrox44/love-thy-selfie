import React from 'react';
import LandingScreen from '../LandingScreen';
import BookButton from '../BookButton';
import ServiceArea from '../ServiceArea';
import Customize from '../Customize';
import HighTech from '../HighTech/HighTech';
import PhotoGallery from '../PhotoGallery';

export default function Features() {
  return (
    <div className='text-center text-light'>
      
      <LandingScreen />
      <ServiceArea />
      <div className="w-full bg-gradient-to-t from-accent2 via-primary to-accent1 move-to-back">
        <PhotoGallery />
        <Customize />
        <HighTech />
      </div>
      <div className="h-[35px] bg-secondary custom-shadow"></div>    
      <div className="h-[35px] bg-accent1 custom-shadow"></div> 

    </div>
  )
}

