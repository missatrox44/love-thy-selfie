import React from 'react';
import Photos from '../Photos';

import './style.css';

export default function PhotoGallery() {


  return (
    <div className = "flex justify-center py-10 glow" id="photoGallery">
      <Photos />
    </div>
  )
}