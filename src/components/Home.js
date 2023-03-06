import React, { useEffect } from "react";
import "../styles/Home.css";
import img006 from "../images/stock_image006.jpg";
import img003 from "../images/stock_image003.jpg";
import iconHonesty from "../images/icon-honesty.png";
import icontransparent from "../images/icon-transparent.png";
import icontrustworthy from "../images/icon-trustworthy.png";
import serviceIcon from "../images/service.png";
import economyIcon from "../images/economy.png";
import phoneReceiverIcon from "../images/phone-receiver.png";
import translateIcon from "../images/translate.png";
import customerServiceIcon from "../images/customer-service.png";

import aos from "aos";

function Home() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="content">
      <section className="section-one">
        <div className="section-one-main-text text">
          Do business<br></br> with<br></br> confidence.
        </div>

        <div className="section-one-statement-text text">
          We help companies grow<br></br>
          by providing exceptional customer service,<br></br>
          using state-of-the-art technology
        </div>

        <button className="home-contact-us-btn" type="button">
          Contact Us
        </button>
      </section>

      <section className="section-three">
        <div className="activity-section-title">WHAT WE DO</div>

        <div className="activity">
          <div className="activity-top-wrapper">
            
            <div className="activity-title">Multilingual Support</div>
            <img
              className="activity-top-image"
              src={translateIcon}
              alt="something"
            ></img>
          
          </div>
          <div className="activity-content-wrapper">
            <div className="activity-description">
              Looking for exceptional customer service that speaks your
              language?<br></br> 
              We offer Multilingual Support to
              fulfill your customer's needs.
            </div>
          </div>
        </div>

        <div className="activity">
          <div className="activity-top-wrapper">
            <div className="activity-title">Outbound Calling</div>
            <img
              className="activity-top-image"
              src={phoneReceiverIcon}
              alt="something"
            ></img>
          </div>

          <div className="activity-content-wrapper">
            <div className="activity-description">
              Help your customer stay up to date with your latest products and
              services through our Outbound Calling service. Our agents will
              follow up with your clientele to ensure you're getting the most
              out of your brand and products.
            </div>
          </div>
        </div>

        <div className="activity">
          <div className="activity-top-wrapper">
            <div className="activity-title">Sales and Marketing</div>
            <img
              className="activity-top-image"
              src={economyIcon}
              alt="something"
            ></img>
          </div>

          <div className="activity-content-wrapper">
            <div className="activity-description">
              Our Sales and Marketing services are designed to help you make the
              most of our offerings, with lead generation, cross-selling, and
              upselling to boost your experience.
            </div>
          </div>
        </div>

        <div className="activity">
          <div className="activity-top-wrapper">
            <div className="activity-title">Technical Service</div>
            <img
              className="activity-top-image"
              src={serviceIcon}
              alt="something"
            ></img>
          </div>
          <div className="activity-content-wrapper">
            <div className="activity-description">
              Don't let technical issues slow you down. Our technical support
              team is here to provide expert troubleshooting assistance, helping
              you resolve any issues quickly and effectively.
            </div>
          </div>
        </div>

        <div className="activity">

          <div className="activity-top-wrapper">
            <div className="activity-title">Customer Service</div>
            <img
              className="activity-top-image"
              src={customerServiceIcon}
              alt="something"
            ></img>
          
          </div>
          <div className="activity-content-wrapper">
            <div className="activity-description">
              At the heart of our service offerings is our commitment to
              exceptional customer service. Our dedicated customer service team
              is here to support your customers around the clock, ensuring they
              have a positive experience with your business every step of the
              way.
            </div>
          </div>
        </div>
      </section>

      <section className="section-two">
        <img
          className="section-two-image style-image"
          src={img006}
          alt="call center agents speaking"
        />
        <div className="section-two-main-text">
          We keep things simple, efficient and we act fast.{" "}
        </div>

        <div className="section-two-main-text">
          The customer is at the heart of what we do.{" "}
        </div>
        <img
          className="section-two-image style-image"
          src={img003}
          alt="call center agents speaking"
        />
      </section>

      <section className="statement-section">
        <div className="statement-section-text">
          Our main goal is to provide exceptional customer service and support,
          <br></br>
          always resulting in increased<br></br>
          <span>customer satisfaction</span>,
          <br></br><span>loyalty</span>,
          <br></br>and <span>retention</span>.
        </div>
      </section>

      <section></section>
    </div>
  );
}

export default Home;
