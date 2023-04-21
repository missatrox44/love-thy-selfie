import React from 'react';
import BookButton from '../BookButton';
import Header from "../../components/Header";
import LargeLanding from "../../assets/collage.png"
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
            <img src={LargeLanding} alt="Love Thy Selfie Photo Booth example" className="w-full"/> 
              :
            <img src={PhoneLanding} alt="Love Thy Selfie Photo Booth examples" className="w-full"/>
          }
          </div>
          <div className="absolute bg-gradient-to-t from-primary h-[130vw] lg:h-[47.5vw] w-[100%] under-shadow lift">
            <div className="h-[85%] absolute bottom-[-30%] w-full">
              <h3 className='text-white text-3xl lg:text-[100px] lg:leading-none px-5 pb-8 karla-700 drop-shadow-lg'>
                  Do your "selfie" a favor <br/> and book us!
              </h3>
              <BookButton/>
            </div>
          </div>
        </div>
    </div>
  )
}

