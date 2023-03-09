import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactForm.css";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0d1l91n",
        "template_0xz0o2f",
        form.current,
        "NMkzITM980jGYwdU2"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-wrapper">

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="group">
          <input className="form-field" type="text" name="user_name" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Your Name</label>
        </div>

        <div className="group">
          <input className="form-field" type="text" name="company_name" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Your Company's Name</label>
        </div>

        <div className="group">
          <input className="form-field" type="email" name="user_email" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Your Email</label>
        </div>
        <div className="group">
          <textarea className="form-field" name="message" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Tell us what are you interested in...</label>  
        </div>
        <input className="submit-btn" type="submit" className="submit-btn" value="Send Message" />
      </form>
    </div>
  );
}

export default ContactForm;
