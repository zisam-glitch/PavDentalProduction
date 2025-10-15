import React from "react";
import Contacts from "../Components/Contact/Contact5";
import Social from "../Components/Social/Social3";


export default function Contact() {
  return (
    <>
      <div className="st-height-b125 st-height-lg-b80 " id="home"></div>
      <div className="flex">
        <div className="col-lg-8">
          <Contacts />
        </div>
        <div className="col-lg-4 p-10-5">
        <div class="st-height-b120 st-height-lg-b0"></div>
          <div>
            <h4 className="blue">Our Address</h4>
            <p>786 Leeds Road, Bradford, BD3 9TY</p>
            <p>hello@pavdental.com</p>
            <p>0800 1938 786</p>
          </div>
          <div class="st-height-b20 st-height-lg-b20"></div>
          <div>
            <h4 className="blue">Our Social</h4>
            <div class="st-height-b10 st-height-lg-b10"></div>
            <Social />
          </div>
          <div class="st-height-b30 st-height-lg-b30"></div>
         
          <div class="st-height-b20 st-height-lg-b20"></div>
          <div>
            <h4 className="blue">Practice Manager</h4>
            <p>hello@pavdental.com</p>
          </div>
        </div>
        <div class="st-height-b0 st-height-lg-b80"></div>
      </div>
    </>
  );
}

