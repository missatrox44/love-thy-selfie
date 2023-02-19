import React from "react";
import Header from "../../components/Header";
import BookButton from "../../components/BookButton";
import Features from "../../components/Features";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";

export default function Home() {

  return (
    <div className='text-center'>
      <Features />
      {/* <div className="reviews"> */}
      <div className="bg-primary">

        <Reviews />
      </div>
      <div className="under-reviews-triangle"></div>
      <div className="slanted-green-stripe"></div>
      <div className="slanted-pink-stripe"></div>
      <div className="slanted-purple-stripe"></div>
      <div className="slanted-white-stripe"></div>
      {/* <PhotoGallery /> */}
      <div>
        {/* <BookButton /> */}
      </div>
      <Footer />
    </div>

  )
}