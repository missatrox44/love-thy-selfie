import React, { useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import "./style.css";
import emailjs from "@emailjs/browser";
import thankYou from "../../assets/thankyou.jpg";

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
      return "50px";
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
    <div className='bg-gradient-to-t from-accent2 to-primary move-to-back pb-5'>
      
        <div className="text-center text-[#FFF9F4] mb-5 mx-5 ">
          <h2 className={`bevan text-5xl pt-8 ${isHideToast ? "" : "hidden"}`}>
            Contact us!
          </h2>
          <p className={`karla-400 text-lg ${isHideToast ? "" : "hidden"}`}>
            Please fill out the contact form below. Include the city and date of
            your event.
          </p>
        </div>

        {/* START TOAST */}
        <div
          className={`text-center text-[#FFF9F4] mb-5 mx-5 ${
            isHideToast ? "hidden" : ""
          }`}
        >
          <h2 className="bevan text-5xl">Success!</h2>
          <p>
            We received your message and will get back to you within 24 hrs.
          </p>
          <div className="flex justify-center">
            <img className="rounded mt-10" src={thankYou} />
          </div>
        </div>
        {/* END TOAST */}
        <div className="rounded-3xl bg-[var(--green)] w-11/12 mx-auto">
        <form
          ref={form}
          onSubmit={sendEmail}
          className={`${isHideToast ? "" : "hidden"}`}
          style={{ margin: handleStyling() }}
        >
          <div className="relative z-0 w-full mb-6 group0">
            <input
              type="text"
              name="name"
              className="block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-[#FFCE3A]appearance-none text-white focus:outline-none focus:ring-0 focus:border-[#FFCE3A] peer mt-5"
              placeholder=" "
              required
              value={name}
              onChange={handleChange}
            />
            <label
              for="name"
              className="peer-focus:font-medium absolute text-lg text-[#FFCE3A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFCE3A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                className="block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-[#FFCE3A]appearance-none text-white focus:outline-none focus:ring-0 focus:border-[#FFCE3A] peer"
                placeholder=" "
                required
                value={email}
                onChange={handleChange}
              />
              <label
                for="email"
                className="peer-focus:font-medium absolute text-lg text-[#FFCE3A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFCE3A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                className="block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-[#FFCE3A]appearance-none text-white focus:outline-none focus:ring-0 focus:border-[#FFCE3A] peer"
                placeholder=" "
                required
                value={phone}
                onChange={handleChange}
              />
              <label
                for="phone"
                className="peer-focus:font-medium absolute text-lg text-[#FFCE3A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFCE3A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="city"
                className="block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-[#FFCE3A]appearance-none text-white focus:outline-none focus:ring-0 focus:border-[#FFCE3A] peer"
                placeholder=" "
                required
                value={city}
                onChange={handleChange}
              />
              <label
                for="city"
                className="peer-focus:font-medium absolute text-lg text-[#FFCE3A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFCE3A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                City
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="date"
                name="date"
                className="block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-[#FFCE3A]appearance-none text-white focus:outline-none focus:ring-0 focus:border-[#FFCE3A] peer"
                placeholder=" "
                required
                value={date}
                onChange={handleChange}
                id="date-input"
              />
              <label
                for="date"
                className="peer-focus:font-medium absolute text-lg text-[#FFCE3A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFCE3A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date of Event
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group0">
            <textarea
              type="text"
              name="message"
              className="block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-[#FFCE3A]appearance-none text-white focus:outline-none focus:ring-0 focus:border-[#FFCE3A] peer"
              placeholder=" "
              value={message}
              onChange={handleChange}
              id="message-input"
            />
            <label
              for="name"
              className="peer-focus:font-medium absolute text-lg text-[#FFCE3A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFCE3A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message (optional)
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              // id="contact-send"
              className="karla-800 inline-block px-6 py-2.5 bg-[#FFCE3A] text-black font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-[var(--pink)] hover:shadow-lg focus:bg-[var(--pink)] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[var(--pink)] active:shadow-lg transition duration-150 ease-in-out mb-10"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
