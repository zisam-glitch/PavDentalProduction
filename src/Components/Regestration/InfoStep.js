import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "./features/user";

const InfoStep = () => {
 
  

  return (
    <div className="info">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and other information.</p>
      <form className="form" autoComplete="on">
        <div className="fields">
          <div className="dflex">
            <label>Title</label>
          
          </div>
          <input
            type="text"
            placeholder="e.g. Mrs"
           
          />
        </div>

        <div className="fields">
          <div className="dflex">
            <label>Full Name</label>
          
          </div>
          <input
            type="text"
            placeholder="e.g. Stephen King"
        
          />
        </div>



        <div className="fields">
          <div className="dflex">
            <label>Date of Birth (DD MM YYYY)</label>
          
          </div>
          <input
            type="text"
            placeholder="e.g. 01 01 1990"
            
          />
        </div>
        <div className="fields">
          <div className="dflex">
            <label>What is your sex as recorded on your NHS record?</label>
          </div>
          <select
            name="sex"
            required
          >
            <option >Select</option>
            <option >Female</option>
            <option >Male</option>
            <option >Intersex</option>
            <option>
              Not specified or known
            </option>
          </select>
        </div>
        <div className="fields">
          <div className="dflex">
            <label>NHS Number (if you have it)</label>
          </div>
          <input
            type="text"
            placeholder="e.g. 123 456 7890"
            inputMode="tel"
          />
        </div>
      
     

        
        <div className="fields">
          <div className="dflex">
            <label>Name of UK GP surgery you registered with</label>
          </div>
          <input
            type="text"
            placeholder="e.g. The Medics PCN"
          />
        </div>
  
        
        <div className="fields">
          <div className="dflex">
            <label>Home phone number</label>

          </div>
          <input
            type="text"
            placeholder="e.g. 234 567 890"
            inputMode="tel"
          />
        </div>
        <div className="fields">
          <div className="dflex">
            <label>Mobile phone number</label>
           
          </div>
          <input
            type="text"
            placeholder="e.g. +44 234 567 890"
            inputMode="tel"
          />
        </div>
        <div className="fields">
          <div className="dflex">
            <label>Email Address</label>
           
          </div>
          <input
            type="text"
            inputMode="email"
            placeholder="e.g. pav@pavdental.com"

          />
        </div>
        
        <div className="fields">
          <div className="dflex">
            <label>Name of emergency contact
            </label>
          </div>
          <input
            type="text"
            placeholder="e.g. David Markos"
          />
        </div>
        <div className="fields">
          <div className="dflex">
            <label>Phone number of emergency contact
            </label>
          </div>
          <input
            type="text"
            placeholder="e.g. 123 0145 452"
            inputMode="tel"

          />
        </div>
        <div className="fields">
          <div className="dflex">
            <label>Their relationship to you
            </label>
          </div>
          <input
            type="text"
            placeholder="e.g. Dad"
          />
        </div>
        
        



      </form>
  
    </div>
  );
};

export default InfoStep;
