import React from "react";
import img020 from "../images/stock_image020.jpg";
import img016 from "../images/stock_image016.jpg";

import img022 from "../images/stock_image022.jpg";
import img006 from "../images/stock_image006.jpg";

import img023 from "../images/stock_image023.jpg";
import img024 from "../images/stock_image024.jpg";
import img007 from "../images/stock_image007.jpg";

import "../styles/Services.css";

function Services() {
  return (
    <div className="services-wrapper">
      <section className="services-section-one">
        <div className="services-header">
          <div className="services-header-title">OUR SERVICES</div>
          <div className="services-header-content">
            <div className="services-header-text">
              Keeping you ahead of the competition by keeping your customers
              satisfied
            </div>
            <img
              className="header-image"
              src={img020}
              alt="customer service"
            ></img>
          </div>
        </div>
      </section>

      <div className="service-section">
        <div className="service-title">MULTILINGUAL SUPPORT</div>
        <div className="service-section-wrapper">
          <div className="services-text">
            Our Multilingual Support service is designed to provide exceptional
            customer service in your customers' preferred language. Our team of
            agents is fluent in a variety of languages, ensuring that we can
            communicate effectively with customers from all over the world.
            <br></br>
            <br></br>
            We understand that language barriers can be a significant challenge
            for businesses operating globally, which is why we offer
            multilingual support to ensure that all of your customers feel heard
            and valued.
            <br></br>
            <br></br>
            Whether you need assistance with technical issues or have questions
            about your products or services, our multilingual support team is
            here to help.
          </div>
          <img
            className="service-image"
            src={img016}
            alt="customer service"
          ></img>
        </div>
      </div>
      <div className="service-section">
        <div className="service-title">OUTBOUND CALLING</div>
        <div className="service-section-wrapper">
          <div className="services-text">
            Our Outbound Calling service is designed to help you stay connected
            with your customers and ensure that they're getting the most out of
            your brand and products.<br></br>
            <br></br>Our experienced agents will follow up with your clientele
            via phone to offer support, answer questions, and provide
            information about your latest products and services.<br></br>
            <br></br>
            Outbound calling is a powerful tool for building customer loyalty
            and boosting sales, and our team is here to help you make the most
            of this strategy.
          </div>
          <img
            className="service-image"
            src={img006}
            alt="customer service"
          ></img>
        </div>
      </div>

      <div className="service-section">
        <div className="service-title">SALES AND MARKETING</div>
        <div className="service-section-wrapper">
          <div className="services-text">
            Our Sales and Marketing services are designed to help you increase
            your revenue and grow your business.<br></br>
            <br></br>Our team of experts will work with you to develop a
            customized strategy that includes lead generation, cross-selling,
            and upselling to maximize your profits.
            <br></br>
            <br></br>We understand that every business is unique, which is why
            we take a personalized approach to our sales and marketing services
            to ensure that we're providing you with the best possible results.
          </div>
          <img
            className="service-image"
            src={img022}
            alt="customer service"
          ></img>
        </div>
      </div>

      <div className="service-section">
        <div className="service-title">TECHNICAL SERVICE</div>
        <div className="service-section-wrapper">
          <div className="services-text">
            Technical issues can be a major roadblock for businesses, which is
            why our Technical Service team is here to provide expert
            troubleshooting assistance.<br></br>
            <br></br>Our experienced technicians are well-versed in a variety of
            technical issues and can help you resolve any problems quickly and
            effectively.<br></br>
            <br></br>Whether you're dealing with software bugs, hardware
            failures, or network connectivity issues, we're here to help you get
            back on track as soon as possible.
          </div>
          <img
            className="service-image"
            src={img023}
            alt="customer service"
          ></img>
        </div>
      </div>

      <div className="service-section">
        <div className="service-title">CUSTOMER SERVICE</div>
        <div className="service-section-wrapper">
          <div className="services-text">
            At the heart of our service offerings is our commitment to
            exceptional Customer Service. Our team of dedicated agents is here
            to support your customers 24/7, ensuring that they have the best
            possible experience with your business.<br></br>
            <br></br>From answering questions and providing assistance to
            handling complaints and resolving issues, our customer service team
            is committed to providing friendly, professional, and efficient
            service to all of your customers.
          </div>
          <img
            className="service-image"
            src={img007}
            alt="customer service"
          ></img>
        </div>
      </div>

      <div className="service-section">
        <div className="service-title">SURVEY AND MARKET RESEARCH</div>
        <div className="service-section-wrapper">
          <div className="services-text">
            Our Surveys and Market Research service is designed to help you
            gather valuable insights and feedback from your customers.<br></br>
            <br></br>Our experienced agents will conduct phone surveys and
            research on behalf of your business, gathering valuable data that
            can help you improve your products, services, and overall customer
            experience.<br></br>
            <br></br>We understand that market research can be a time-consuming
            and challenging process, which is why we're here to help you get the
            information you need to make informed business decisions.<br></br>
            <br></br>With our Surveys and Market Research service, you can gain
            a deeper understanding of your customers' needs and preferences,
            allowing you to tailor your offerings to better meet their needs.
          </div>
          <img
            className="service-image"
            src={img024}
            alt="customer service"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Services;
