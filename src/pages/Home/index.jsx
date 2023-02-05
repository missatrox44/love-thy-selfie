import React from "react";
import Header from "../../components/Header";
import Features from "../../components/Features";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";

export default function Home() {

  return (
    <div className='text-center'>
      <Features />
      <Reviews />
      {/* <PhotoGallery /> */}
      <div className='my-7'>
        <BookButton />
      </div>
      <Footer />
    </div>

  )
}