import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import img010 from "../images/stock_image010.jpg";
import img003 from "../images/stock_image003.jpg";
import serviceIcon from "../images/service.png";
import economyIcon from "../images/economy.png";
import phoneReceiverIcon from "../images/phone-receiver.png";
import translateIcon from "../images/translate.png";
import customerServiceIcon from "../images/customer-service.png";
import surveysAndMarketIcon from "../images/completed-task.png";
import ContactForm from "./ContactForm";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Home() {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);

    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <div className="content">
      <section className="section-one">
        <motion.div className="section-one-main-text">
          Do business<br></br> with<br></br> confidence.
        </motion.div>

        {/*Do business<br></br> with<br></br> confidence.*/}
        <div className="section-one-statement-text text">
          We help companies grow<br></br>
          by providing exceptional customer service,<br></br>
          using state-of-the-art technology
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.25 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.15 }}
          className="home-contact-us-btn"
          type="button"
        >
          Contact Us
        </motion.button>
      </section>

      <section className="section-three">
        <div className="activity-section-title">This is what we do...</div>

        <div ref={ref} className="activities">
          <motion.div className="activity" animate={animation}>
            <div className="activity-top-wrapper">
              <div className="activity-title">
                Multilingual<br></br>Support
              </div>
              <img
                className="activity-top-image"
                src={translateIcon}
                alt="something"
              ></img>
            </div>
            <div className="activity-content-wrapper">
              <div className="activity-description">
                Looking for exceptional customer service that speaks your
                language? We offer Multilingual Support to fulfill your
                customer's needs.
              </div>
            </div>
          </motion.div>

          <motion.div className="activity" animate={animation}>
            <div className="activity-top-wrapper">
              <div className="activity-title">
                Outbound<br></br>Calling
              </div>
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
          </motion.div>

          <motion.div className="activity" animate={animation}>
            <div className="activity-top-wrapper">
              <div className="activity-title">
                Sales and<br></br>Marketing
              </div>
              <img
                className="activity-top-image"
                src={economyIcon}
                alt="something"
              ></img>
            </div>

            <div className="activity-content-wrapper">
              <div className="activity-description">
                Our Sales and Marketing services are designed to help you make
                the most of our offerings, with lead generation, cross-selling,
                and upselling to boost your experience.
              </div>
            </div>
          </motion.div>

          <motion.div className="activity" animate={animation}>
            <div className="activity-top-wrapper">
              <div className="activity-title">
                Technical<br></br>Service
              </div>
              <img
                className="activity-top-image"
                src={serviceIcon}
                alt="something"
              ></img>
            </div>
            <div className="activity-content-wrapper">
              <div className="activity-description">
                Don't let technical issues slow you down. Our technical support
                team is here to provide expert troubleshooting assistance,
                helping you resolve any issues quickly and effectively.
              </div>
            </div>
          </motion.div>

          <motion.div className="activity" animate={animation}>
            <div className="activity-top-wrapper">
              <div className="activity-title">
                Customer<br></br>Service
              </div>
              <img
                className="activity-top-image"
                src={customerServiceIcon}
                alt="something"
              ></img>
            </div>
            <div className="activity-content-wrapper">
              <div className="activity-description">
                At the heart of our service offerings is our commitment to
                exceptional customer service. Our dedicated team is here to
                support your customers around the clock, ensuring they have the
                best experience with your business every step of the way.
              </div>
            </div>
          </motion.div>

          <motion.div className="activity" animate={animation}>
            <div className="activity-top-wrapper">
              <div className="activity-title">
                Surveys &<br></br>Market Research
              </div>
              <img
                className="activity-top-image"
                src={surveysAndMarketIcon}
                alt="survey and market research"
              ></img>
            </div>
            <div className="activity-content-wrapper">
              <div className="activity-description">
                Get valuable insights and feedback from your customers with our
                Surveys and Market Research service. Our experienced agents will
                conduct phone surveys and research on behalf of your business,
                gathering valuable data that can help you improve your products,
                services, and overall customer experience.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-two">
        <img
          className="section-two-image style-image"
          src={img010}
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
          <span>always</span> resulting in increased<br></br>
          <span>customer satisfaction</span>,<br></br>
          <span>loyalty</span>,<br></br>and <span>retention</span>.
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-section-text">Contact Us</div>
        <ContactForm />
      </section>

      <section className="address-section">
        <div className="address-section-wrapper">
          <div className="address-continent">OUR EASTERN EUROPE OFFICE</div>
          <div className="address-county address-details">Hunedoara, Romania</div>
          <div className="address-postalcode address-details">337327</div>
          <div className="address-street address-details">Strada Principala 142</div>

          <div className="address-section-wrapper address-section-inside-wrapper">
          <div className="address-contact">REACH OUT TO US BY PHONE</div>
          <div className="address-phone address-details">+40 754 427 097</div>
        
          <div className="address-section-wrapper address-section-inside-wrapper">
          <div>REACH OUT TO OUR PARTNERS</div>
          <a href="mailto: daniel@commfidencegroup.com">daniel@commfidencegroup.com</a><br></br> 
          <a href="mailto: kelvin@commfidencegroup.com">kelvin@commfidencegroup.com</a> 

        </div>

        </div>        
        
        </div>



        
      </section>
    </div>
  );
}

export default Home;
