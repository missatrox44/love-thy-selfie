import React from "react";




export default function ContactForm () {

  return (
    <form>
      <input
        required
        name="name"
        placeholder="Name*"
        // value={name}
        //onChange={}
      />
      <input
        required
        name="email"
        placeholder="Email*"
        // value={name}
        //onChange={}
      />
      <input
        required
        name="phone"
        placeholder="Phone*"
        // value={name}
        //onChange={}
      />
      <input
        required
        name="city"
        placeholder="City*"
        // value={name}
        //onChange={}
      />
      <input
        required
        name="date"
        placeholder="Date*"
        // value={name}
        //onChange={}
      />
      <input
        name="date"
        placeholder="Date*"
        // value={name}
        //onChange={}
      />
      <input type="submit" value="SEND"/>
    </form>

  )

}