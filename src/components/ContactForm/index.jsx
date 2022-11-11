import React from "react";
import "./style.css";


export default function ContactForm () {

  return (
    <form>
      <input
        required
        className="input-field"
        name="name"
        placeholder="Name*"
        // value={name}
        //onChange={}
      />
      <input
        required
        className="input-field"
        name="email"
        placeholder="Email*"
        // value={name}
        //onChange={}
      />
      <input
        required
        className="input-field"
        name="phone"
        placeholder="Phone*"
        // value={name}
        //onChange={}
      />
      <input
        required
        className="input-field"
        name="city"
        placeholder="City*"
        // value={name}
        //onChange={}
      />
      <input
        required
        className="input-field"
        name="date"
        placeholder="Date*"
        // value={name}
        //onChange={}
      />
      <input
        name="message"
        placeholder="Message (Optional)"
        // value={name}
        //onChange={}
      />
      <input type="submit" value="SEND"/>
    </form>

  )

}