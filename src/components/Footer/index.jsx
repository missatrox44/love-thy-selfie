import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer>
      <div className='footer-grid'>
        <div className='footer-links'> 
          <ul>  
            <li><a href='#'>Book Now</a></li>
            <li><a href='#'>Features</a></li>
            <li><a href='#'>Reviews</a></li>
            <li><a href='#'>Gallery</a></li>
          </ul>
        </div>
        <div className='text-align-center'> 
          <ul>  
            <li>Contact Us:</li>
            <li>(325) 514-5998</li>
            <li><a href='#'>someemailaddress@gmail.com</a></li>
            <li><a target='_blank' href='https://www.facebook.com/profile.php?id=100063804810096'>Facebook</a></li>
          </ul>
        </div>
        <div>
            <ul className='text-align-right custom-footer-title'>
              <li>Love Thy</li>
              <li>Selfie</li>
              <li>Photo Booth</li>
            </ul>
        </div>
      </div>

      <div className='copyright'>
          <p> ⓒ Love Thy Selfie Photo Booth 2022</p>
          <p>Site created by <a target='_blank' href='https://missatrox44.github.io/portfolio/'>S.B.</a> & <a target='_blank' href='https://github.com/andcooke'>A.C.</a></p>
        </div>
    </footer>
  )
}

export default Footer