import React from "react";
import { Link } from 'react-router-dom';

export default function BookButton() {

  return (
    <Link to="/contact">
      <a className='karla-800 inline-block px-6 py-2.5 bg-[#FFCE3A] text-black font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-[#0091AD] hover:shadow-lg focus:bg-[#0091AD] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#0091AD] active:shadow-lg transition duration-150 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='light' href='#!' role='button'>Book Now!</a>
    </Link>
  )
}