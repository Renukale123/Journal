import React from "react";
import './Contact.css'

function Contact (){

  return (
    <div className="Contact_Us">
      

        <div id="form-details" >
            <form action="">
                <h1>Feel Free to Contact Us</h1>
                <input type="text" placeholder="Your Name"/>
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="Subject"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your MESSAGE"></textarea>
                <button class="normal">Confirm</button>
                </form>
          
        </div>
    </div>
  );
};

export default Contact;