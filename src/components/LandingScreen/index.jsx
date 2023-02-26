import React from 'react';
import BookButton from '../BookButton';
import Header from "../../components/Header";
import LargeLanding from "../../assets/LargeLanding.png"
import PhoneLanding from '../../assets/PhoneLanding.png'
import { useMediaQuery } from '@mui/material';

import './styles.css'


export default function LandingScreen() {

  const bigScreen = useMediaQuery('(min-width:1024px)');

  return (
    <div>
      <Header />
        <div className="flex w-full justify-center">
          <div className="w-full">
          {
            bigScreen 
              ? 
            <img src={LargeLanding} className="w-full"/> 
              :
            <img src={PhoneLanding} className="w-full"/>
          }
          </div>
          <div className="absolute bg-gradient-to-t from-primary h-[130vw] lg:h-[47.5vw] w-[105%] under-shadow lift">
            <div className="h-[70%] absolute bottom-[-30%] w-full">
              <h3 className='text-white text-3xl px-5 pb-8 karla-700'>
                Do your "selfie" a favor and book us!
              </h3>
              <BookButton/>
            </div>
          </div>
        </div>
    </div>
  )
}

