import React from "react";
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function BookButton() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (

      <button
       className='karla-800 inline-block px-6 py-3 bg-secondary text-black font-medium text-3xl leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out' 
       data-mdb-ripple='true' 
       data-mdb-ripple-color='light'  
       id="custom-button" 
       role='button'
       onClick={handleClick}
       >Book Now</button>
   
  )
}