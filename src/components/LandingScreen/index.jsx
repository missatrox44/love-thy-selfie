import React from 'react';
import BookButton from '../BookButton';
import Header from "../../components/Header";


export default function LandingScreen() {
  return (
    <div className="h-screen bg-gray-300">
      <Header />
      <h3 className='text-3xl font-bold mb-8 px-5'>Do your 'selfie' a favor and book us!</h3>
      <BookButton />
    </div>
  )
}

