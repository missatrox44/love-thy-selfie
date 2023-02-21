import React, { useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import "./style.css";
import emailjs from "@emailjs/browser";
import photobooth from '../../assets/photobooth.jpg';
import thankYou from '../../assets/thankyou.jpg';

export default function ContactForm() {
  const bigScreen = useMediaQuery("(min-width: 1024px)");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    date: "",
    message: "",
  });

  const [isHideToast, setIsHideToast] = useState(true);

  function handleStyling() {
    if (!bigScreen) {
      return;
    } else {
      return "0px 300px";
    }
  }

  const form = useRef();

  const { name, email, phone, city, date, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState);
  }

  function hideToast() {
    setIsHideToast(true);
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kbxx6uj",
        "template_yqrayj7",
        form.current,
        "trIcb6hP_q2qaGEBC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    console.log("sent email theoretically!");

    setFormState({
      name: "",
      email: "",
      phone: "",
      city: "",
      date: "",
      message: "",
    });
    setIsHideToast(false);
    // setTimeout(hideToast, 4000);
  }

  return (
    <div>
      <div className="text-center text-[#FFF9F4] mb-5 mx-5">
        <h2 className={`bevan text-2xl ${isHideToast ? "" : "hidden"}`}>Contact us!</h2>
        <p className={`karla-400 text-sm ${isHideToast ? "" : "hidden"}`}>
          Please fill out the contact form below. Include the city and date of your event.
        </p>
      </div>

      {/* START TOAST */}
      <div className={`text-center text-[#FFF9F4] mb-5 mx-5 ${isHideToast ? "hidden" : ""}`}>
        <h2 className='bevan text-2xl'>Success!</h2>
        <p>We received your message and will get back to you within 24 hrs.</p>
       <div className='flex justify-center'>
       <img className='rounded mt-10' src={thankYou}/>
       </div> 
      </div>
      {/* END TOAST */}

      <form
        ref={form}
        onSubmit={sendEmail}
        className={`contact-form ${isHideToast ? "" : "hidden"}`}
        style={{ margin: handleStyling() }}
      >
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
        <input
          type="submit"
          value="SEND"
          className="input-field"
          id="contact-send"
        />
      </form>
    </div>
  );
}
