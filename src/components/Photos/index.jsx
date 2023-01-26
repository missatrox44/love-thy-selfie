import React from "react";
import { photos } from "../../assets/photoGallery";
import { useState } from "react";
import { useEffect } from "react";


export default function Photos() {

const [image, setImage] = useState(photos[0].source);
const [newImage, setNewImage] = useState(true);

  const randomNumber = () => {
    let length = photos.length;
    let random = Math.floor(Math.random() * length);
    return random;
  }

  const randomImagePicker = () => {
    setTimeout(() => {
      setNewImage(!newImage);
    }, 2000)
    setImage(photos[randomNumber()].source);
  }


  useEffect(() =>{
    randomImagePicker()
  }, [newImage])


  return (
    <div>
        <img src={image} />
    </div>
  )
}
