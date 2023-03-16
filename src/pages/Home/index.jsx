import React from "react";
import BookButton from "../../components/BookButton";
import Features from "../../components/Features";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";

export default function Home() {

  return (
    <div className='text-center'>
      <Features />
      {/* <div className="reviews"> */}
      <div className="bg-primary custom-shadow">
        <Reviews />
      </div>
      <div className="under-reviews-triangle"></div>
      <div className="slanted-stripe bg-accent2 mt-[-8%]"></div>
      <div className="slanted-stripe bg-accent1"></div>
      <div className="slanted-stripe bg-primary"></div>
      <div className="slanted-white-stripe"></div>
      <div className="bg-dark w-full mt-[-8%] h-[100px]" id="black-stripe"></div>
      <div className="footer-book-button">
        <BookButton />
      </div>
      <div className="pt-[100px] mt-[-11rem] bg-primary custom-footer">
        <Footer />
      </div>
  
    </div>

  )
}