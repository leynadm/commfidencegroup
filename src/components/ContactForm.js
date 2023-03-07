import React from "react";
import "../styles/ContactForm.css";
function ContactForm() {
  return (
    <div>
      <form>
        
      <input type="text" placeholder="Your Name" />
        
        <input type="email" placeholder="Your email address" />
        <input type="type" placeholder="Your company/brand" />
        <textarea />
        <button type="button">Submit Inquiry</button>
      </form>
    </div>
  );
}

export default ContactForm;
