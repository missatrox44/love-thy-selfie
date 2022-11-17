import React, { useRef, useState } from "react";
import "./style.css";


export default function ContactForm () {

  const [formState, setFormState] = useState({
    name:"",
    email:"",
    phone:"",
    city:"",
    date:"",
    message:"",
  })


  const form = useRef();

  const { name, email, phone, city, date, message } = formState;

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value });
    console.log(formState);
  }

  function sendEmail(e) {
    e.preventDefault();

    //emailjs goes here

    console.log("sent email theoretically!");

    setFormState({
      name:"",
      email:"",
      phone:"",
      city:"",
      date:"",
      message:"",
    })
  }

  return (
  
    <form ref={form} onSubmit={sendEmail} className="contact=form">
      <input
        required
        type="text"
        className="input-field"
        name="name"
        placeholder="Name*"
        value={name}
        onChange={handleChange}
      />
      <input
        required
        type="email"
        className="input-field"
        name="email"
        placeholder="Email*"
        value={email}
        onChange={handleChange}
      />
      <input
        required
        type="tel"
        className="input-field"
        name="phone"
        placeholder="Phone*"
        value={phone}
        onChange={handleChange}
      />
      <input
        required
        type="text"
        className="input-field"
        name="city"
        placeholder="City*"
        value={city}
        onChange={handleChange}
      />
      <input
        required
        type="date"
        className="input-field"
        id="date-input"
        name="date"
        placeholder="Date*"
        value={date}
        onChange={handleChange}
      />
      <textarea
        name="message"
        type="text"
        className="input-field"
        id="message-input"
        placeholder="Message (Optional)"
        value={message}
        onChange={handleChange}
      />
      <input type="submit" value="SEND" className="input-field" id="contact-send"
/>
    </form>
  )

}