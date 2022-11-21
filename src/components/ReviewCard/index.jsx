import React from "react";
import './styles.css';

export default function ReviewCard ({number}) {

  console.log(number);

  return (
    <div className="temp-card">
      <p>{number}</p>
    </div>
  )
}