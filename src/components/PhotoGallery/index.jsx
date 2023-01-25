import React from 'react';
import { photos } from '../../assets/photoGallery';


export default function PhotoGallery() {



  return (
    <div>
    {photos.map((photo, i) => (
      <img src={`https://drive.google.com/uc?export=view&id=${photo.imageId}`} alt="drive image"/>
    ))}
    </div>
  )
}

