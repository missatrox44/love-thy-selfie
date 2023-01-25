import React from "react";
import Header from "../../components/Header";
import Features from "../../components/Features";
import Reviews from "../../components/Reviews";
import PhotoGallery from "../../components/PhotoGallery";
import BookButton from "../../components/BookButton";
import Footer from "../../components/Footer";

export default function Home() {

  return (
    <div>
      {/* <Features />
      <Reviews /> */}
      <PhotoGallery />
      <Footer />
    </div>

  )
}