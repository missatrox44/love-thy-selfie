import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

export default function BookButton() {

  return (
    <Link to="/contact">
      <a className='inline-block px-6 py-2.5 my-5 bg-blue-600 text-white font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' id="custom-button" data-mdb-ripple='true' data-mdb-ripple-color='light' href='#!' role='button'>Book Now</a>
    </Link>
  )
}