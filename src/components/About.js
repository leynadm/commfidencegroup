import React from "react";
import "../styles/About.css";

import artificialIntelligenceIcon from "../images/artificial-intelligence.png";
import mountainIcon from "../images/mountain.png";
import roboticHandIcon from "../images/robotic-hand.png";
import solutionIcon from "../images/solution.png";
import topRatedIcon from "../images/top-rated.png";
import innovationIcon from "../images/innovation.png";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-header-title">GET TO KNOW ABOUT US...</div>

      <br></br>

      <div className="info-wrapper">
        <img className="info-image" src={innovationIcon} alt="innovation" />
        We are a new and innovative company that specializes in providing
        high-quality customer service solutions to businesses of all sizes.
      </div>

      <br></br>
      <div className="info-wrapper">
        <img className="info-image" src={mountainIcon} alt="reach goals" />
        Our goal is to help you build strong and lasting relationships with your
        customers by delivering exceptional service that exceeds their
        expectations.
      </div>

      <br></br>
      <div className="info-wrapper">
        <img
          className="info-image"
          src={solutionIcon}
          alt="provide solutions"
        />
        At our call center, we understand that each customer is unique, which is
        why we offer personalized solutions that are tailored to your specific
        needs. Our team of experienced professionals is committed to providing
        you with the highest level of service and support, and we are always
        available to answer any questions or concerns you may have.
      </div>

      <br></br>
      <div className="info-wrapper">
        <img className="info-image" src={roboticHandIcon} alt="technology" />
        Our state-of-the-art call center is equipped with the latest technology
        and tools to ensure that every call is handled with the utmost care and
        attention.
      </div>
      <br></br>
      <div className="info-wrapper">
        <img
          className="info-image"
          src={artificialIntelligenceIcon}
          alt="advanced software"
        />
        We use advanced call routing software to connect customers to the right
        representative, and our agents are trained to handle a wide range of
        customer inquiries and issues. Whether you need help with customer
        service, technical support, or sales, we have the expertise and
        resources to help you achieve your goals.
      </div>
      <br></br>
      <div className="info-wrapper">
        <img className="info-image" src={topRatedIcon} alt="" />
        We are committed to delivering exceptional service that helps you build
        long-lasting relationships with your customers, and we look forward to
        working with you to achieve your business objectives. Thank you for
        considering our call center as your partner in success. We are excited
        to help you take your business to the next level!
      </div>
    </div>
  );
}

export default About;
