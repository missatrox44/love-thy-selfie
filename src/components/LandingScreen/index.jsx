import React from 'react';
import BookButton from '../BookButton';
import Header from "../../components/Header";
import LandingImage from "../../assets/LandingImage.png"


export default function LandingScreen() {
  return (
    <div className="h-screen">
      <Header />
      <div>
        <img src={LandingImage} className="absolute"/>
        <div className="absolute bg-gradient-to-t from-red-500 h-[25%] bottom-[30%] w-full"></div>
      </div>
      
      <div className="bg-red-500 h-[30%] w-full absolute bottom-0">
        <h3 className='text-3xl font-bold mb-8 px-5 pt-5'>Do your 'selfie' a favor and book us!</h3>
        <BookButton  className="absolute"/>
      </div>

    </div>
  )
}

