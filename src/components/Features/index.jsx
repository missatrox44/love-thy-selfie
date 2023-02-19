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
    <div className='text-center text-light'>
      
      <LandingScreen />
      <div className="bg-primary">
        <ServiceArea />
      </div>
      <div className="w-full bg-gradient-to-t from-accent2 via-primary to-accent1">
        <PhotoGallery />
        <Customize />
        <HighTech />
      </div>
      <div className="h-[35px] bg-secondary custom-shadow"></div>    
      <div className="h-[35px] bg-accent1 custom-shadow"></div> 

    </div>
  )
}

