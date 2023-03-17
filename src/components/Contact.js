import React from "react";
import ContactForm from "./ContactForm";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-page-main-text">REACH OUT TO US!</div>
      <div className="content-page-wrapper">
        <div className="contact-page-intro-text">
          If you're interested in learning more about our contact center
          services, or have questions about how we can support your business
          needs, please don't hesitate to get in touch with us.<br></br>
          <br></br>
          Our team of experts is available to discuss your requirements and help
          you determine the best solution for your organization.<br></br>
          <br></br>
          We pride ourselves on delivering customized solutions that meet the
          unique needs of each of our clients.<br></br>
          <br></br>
          Let us know how we can help you achieve your business goals, and we'll
          work with you to develop a tailored solution that fits your specific
          needs and budget.
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
