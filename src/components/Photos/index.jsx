import React from "react";

import { photos } from "../../assets/photoGallery";
import { useState } from "react";
import { useEffect } from "react";

import './styles.css';

export default function Photos() {


  const [image, setImage] = useState(photos[Math.floor(Math.random() * 20)].source);
  const [newIndex, setNewIndex] = useState(Math.floor(Math.random() * 20));
  // const [event, setEvent] = useState("Weddings")

  const randomNumber = () => {
    let length = photos.length;
    let random = Math.floor(Math.random() * length);
    return random;
  }

  const randomImagePicker = () => {
    setTimeout(() => {
      setNewIndex(randomNumber());
      setEvent(photos[newIndex].event);
      setImage(photos[newIndex].source);
    }, 3000)
  }

  useEffect(() =>{
    randomImagePicker()
  }, [newIndex]);

  
  return (

    <div className="max-w-full lg:max-w-[95%] m-10 slideshow">
      {/* <h3>{event}</h3> */}
      {/* <p className="text-center text-2xl font-semibold py-5">{event}</p> */}
      <img src={image}/>
    </div>
  )
}
