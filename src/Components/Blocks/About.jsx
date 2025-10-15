import React from "react";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";


export default function Cta() {
  return (
    <div className="bg-red">
      <div className="container AboutCta">
        <div>
          <p>Book An Emergency Dental Appointment With US TODAY!</p>
          <h1>Say Goodbye TO Your Dental Pain!</h1>
        </div>
        <Link
          to="https://sb65.setmore.com/beta"
          target="_blank"
          className="button-cta"
        >
          <SlCalender />
         Book Now
        </Link>
      </div>
    </div>
  );
}
