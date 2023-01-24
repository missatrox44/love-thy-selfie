import React from 'react';
import BookButton from '../BookButton';
import Header from "../../components/Header";
import LargeLanding from "../../assets/LargeLanding.png"
import PhoneLanding from '../../assets/PhoneLanding.png'
import { useMediaQuery } from '@mui/material';



export default function LandingScreen() {

  const bigScreen = useMediaQuery('(min-width:1024px)');

  return (
    <div className="h-screen">
      <Header />

      {bigScreen && <div className="flex justify-center">
        <img src={LargeLanding} className="w-[100vw]"/>
        <div className="absolute bg-gradient-to-t from-purple-800 h-[40%] bottom-[30%] w-full"></div>
      </div>}
      
      {!bigScreen && <div className="flex justify-center">
        <img src={PhoneLanding} className="w-[100vw]"/>
        <div className="absolute bg-gradient-to-t from-purple-800 h-[40%] bottom-[30%] w-full"></div>
      </div>}

      <div className="bg-purple-800 h-[30%] w-full absolute bottom-0">
        <h3 className='text-white text-3xl font-bold mb-8 px-5 pt-5'>Do your 'selfie' a favor and book us!</h3>
        <BookButton className="absolute"/>
      </div>

    </div>
  )
}

