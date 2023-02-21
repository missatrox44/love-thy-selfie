import React from 'react';
import Photos from '../Photos';

import './style.css';

export default function PhotoGallery() {


  return (
    <div className = "flex justify-center pt-10 glow" id="photoGallery">
      <Photos />
    </div>
  )
}