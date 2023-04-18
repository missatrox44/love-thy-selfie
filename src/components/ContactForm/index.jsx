import React, { useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./style.css";
import emailjs from "@emailjs/browser";
import thankYou from "../../assets/thankyou.jpg";

import "./style.css";
import zIndex from "@mui/material/styles/zIndex";
import { useEffect } from "react";

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
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);


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
    formatTypedDate(e);
    setFormState({ ...formState, [e.target.name]: e.target.value });
    // console.log(formState);
  }

  function formatTypedDate(e) {
    if (e.target.name === "date") {

    }
  }

  // function hideToast() {
  //   setIsHideToast(true);
  // }


  const serviceId = import.meta.env.VITE_SERVICE;
  const templateId = import.meta.env.VITE_TEMPLATE;
  const apiKey = import.meta.env.VITE_API;

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, apiKey).then(
      (result) => {
        // console.log(result.text);
      },
      (error) => {
        // console.log(error.text);
      }
    );

    // console.log("sent email theoretically!");

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

  //for future autofill of city input
  const cities = [
    { id: "city1", City: "Odessa" },
    { id: "city2", City: "Midland" },
    { id: "city3", City: "Pecos" },
    { id: "city4", City: "Big Spring" },
    { id: "city5", City: "Kermit" },
    { id: "city6", City: "Glendale" },
    { id: "city7", City: "Andrews" },
    { id: "city8", City: "Stanton" },
  ];

  const autoCity = { value: "City" };

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const maxYear = today.getFullYear() + 3;
  const maxDate = new Date(`${month} ${day}, ${maxYear}`)


  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setFormState({ ...formState, date: `${month}/${day}/${year}` });
  }

  const calendarHandler = (e) => {
    if (e && e.target.name === "date") {
      if (e.code === "Escape" || e.code === "Tab") {
        setIsCalendarVisible(false);
        return;
      }
    }  
    let type = e.target.type
    if (isCalendarVisible && (type !== 'button' || type === undefined)) {
      setIsCalendarVisible(false)
    }
  }


  return (

    <div className="default"
      onKeyDown={calendarHandler}
      onClick={calendarHandler}
    >
      <div className="bg-gradient-to-t from-accent2 to-primary default">
        <div className="text-center text-[#FFF9F4]">
          <h2 className={`bevan text-5xl pt-8 ${isHideToast ? "" : "hidden"}`}>
            Contact us!
          </h2>
          <p
            className={`karla-400 text-lg mx-5 ${isHideToast ? "" : "hidden"}`}
          >
            Please fill out the contact form below. Include the city and date of
            your event.
          </p>
        </div>

        {/* START TOAST */}
        <div
          className={`text-center text-[#FFF9F4] pb-10 mx-5 ${
            isHideToast ? "hidden" : ""
          }`}
        >
          <h2 className="bevan text-5xl pt-8">Success!</h2>
          <p>
            We received your message and will get back to you within 24 hrs.
          </p>
          <div className="flex justify-center">
            <img
              className="rounded-3xl mt-10 w-[90%] md:w-[60%] lg:w-[40%]"
              src={thankYou}
            />
          </div>
        </div>
        {/* END TOAST */}
  
        <div className="mx-4 md:mx-12 py-6 default">
          <div
            className={
              `rounded-3xl bg-[var(--green)] px-6 pt-8 
              ${isHideToast ? "" : "hidden"}
            `}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className={`${isHideToast ? "" : "hidden"} default`}
              // style={{ margin: handleStyling() }}
            >
              <div className="relative z-0 w-full mb-6 group0">
                <input
                  type="text"
                  name="name"
                  className="block py-2.5 w-full text-lg bg-transparent border-0 border-b-2 border-[#FFCE3A] text-white focus:outline-none focus:ring-0 focus:border-[#FFCE3A] peer mt-5"
                  placeholder=" "
                  required
                  value={name}
                  onChange={handleChange}
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-lg text-[#FFCE3A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFCE3A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="email"
                    className="block py-2.5 w-full text-lg bg-transparent border-0 border-b-2 border-[#FFCE3A] text-white focus:outline-none focus:ring-0 focus:border-[#FFCE3A] peer"
                    placeholder=" "
                    required
                    value={email}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-lg text-[#FFCE3A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFCE3A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="tel"
                    name="phone"
                    className="block py-2.5 w-full text-lg bg-transparent border-0 border-b-2 border-[#FFCE3A] text-white focus:outline-none focus:ring-0 focus:border-[#FFCE3A] peer"
                    placeholder=" "
                    required
                    value={phone}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="phone"
                    className="peer-focus:font-medium absolute text-lg text-[#FFCE3A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFCE3A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6 higher">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="city"
                    className="block py-2.5  w-full text-lg bg-transparent border-0 border-b-2 border-[#FFCE3A] text-white focus:outline-none focus:ring-0 focus:border-[#FFCE3A] peer"
                    placeholder=" "
                    required
                    value={city}
                    onChange={handleChange}
                    onKeyDown={(e) =>{
                      if (e.code === "Tab"){
                        setIsCalendarVisible(true);
                      }
                    }}
                  />
                  <label
                    htmlFor="city"
                    className="peer-focus:font-medium absolute text-lg text-[#FFCE3A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFCE3A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    City
                  </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="date"
                    autoComplete="new-password"
                    className="block py-2.5  w-full text-lg bg-transparent border-0 border-b-2 border-[#FFCE3A] text-white focus:outline-none focus:ring-0 focus:border-[#FFCE3A] peer"
                    placeholder=" "
                    required
                    value={date}
                    onChange={handleChange}
                    onClick={() => {
                      setIsCalendarVisible(true);
                    }}
                    id="date-input"
                  />
                  <label
                    htmlFor="date"
                    className="peer-focus:font-medium absolute text-lg text-[#FFCE3A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFCE3A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Date of Event
                  </label>
                  <div className="flex justify-start w-full">
                    <Calendar 
                      className={`${isCalendarVisible ? "" : "hidden"}`}
                      maxDate={maxDate}
                      minDate={new Date()}
                      calendarType="US"              
                      onClickDay={(value) => {
                        formatDate(value);
                        setIsCalendarVisible(false);
                      }}
                    />
                  </div>
                </div>
              </div>

              
              <div className="relative z-0 w-full mb-6 group default">
                <textarea
                  type="text"
                  name="message"
                  className="default block py-2.5 w-full text-lg bg-transparent border-0 border-b-2 border-[#FFCE3A] text-white focus:outline-none focus:ring-0 focus:border-[#FFCE3A] peer"
                  placeholder=" "
                  value={message}
                  onChange={handleChange}
                  id="message-input"
                />

                <label

                  htmlFor="message"
                  className="peer-focus:font-medium absolute text-lg text-[#FFCE3A] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FFCE3A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Message (optional)
                </label>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  // id='contact-send'
                  className="karla-800 inline-block px-6 py-3 bg-secondary text-black font-medium text-3xl leading-tight uppercase rounded shadow-md hover:bg-accent2 focus:shadow-xl focus:outline-none focus:ring-0 active:shadow-2xl transition duration-150 ease-in-out mb-8"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="triangle under"></div>
      </div>
      <div className="black-rectangle"></div>
    </div>
  );
}
