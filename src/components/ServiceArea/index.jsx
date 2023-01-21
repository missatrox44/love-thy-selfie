import React from 'react';
import medal from '../../assets/medal.png';
import serviceMap from '../../assets/serviceMap.png'
import styles from './styles.css'

export default function Features() {
  return (
    <div className='justify-content-center text-gray-800 py-20 custom-serviceMap bg-gray-200'>
      <img alt='First in West Texas to use a selfie machine medal' className='mb-5' src={medal} />
      <div className="service-text">
        <h3>Service Area</h3>
        <p className="mb-5">Midland/Odessa and surrounding areas</p>
      </div>
      <img alt='service map' className='mb-5' src={serviceMap} />
    </div>


  )
}

