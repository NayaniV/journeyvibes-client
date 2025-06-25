import React, { useEffect } from "react";
import "./Contact.css";
import contact from "./assets/contact.png";
import SendEnquiry from "./SendEnquiry";
import Aos from "aos";
import 'aos/dist/aos.css'
import { NavLink } from "react-router-dom";

const Contact = () => {
  useEffect (()=>{
    Aos.init( {duration:2000});

  },[])
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <section className="contact-container">
      <section className="contact_background">
        <div className="container-fluid p-0 overflow-hidden">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>Contact Us</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/">Home</NavLink> </h5>
                <span className=""> Contact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-contact container overflow-hidden p-5">
        <h3 className="fs-2 fw-bold">
          Get in Touch with Our Travel Experts to Plan Your Perfect Journey!
        </h3>
        <p className="mt-3">
          Whether you need information or assistance, we’re ready to help you
          every step of the way.
        </p>
        <div className="row text-center">
          <div className="col-lg-4 ">
            <div className="call-container container p-4" data-aos="flip-left">
              <i className="bi bi-headset"></i>
              <p>
                Our team is ready to answer your questions and assist with your
                travel plans. Give us a call today!
              </p>
              <i className="bi bi-telephone-fill fs-5"></i>{" "}
              <span className="fs-5 ">+91 8712054298</span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="email-container container p-4" data-aos="flip-right">
              <i className="bi bi-envelope"></i>
              <p>
                Have a question or need assistance? Send us an email, and we’ll
                get back to you as soon as possible!
              </p>
              <i className="bi bi-envelope-fill fs-5"></i>{" "}
              <span className="fs-5">support@journeyvibes.com</span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="media-container container p-4" data-aos="flip-left">
              <i className="bi bi-globe"></i>
              <p>
                Stay connected with us on social media for the latest travel
                tips, offers, and inspiration.
              </p>

              <span className="me-4 ">
                <i className="bi bi-youtube fs-5"></i>
              </span>
              <span className="me-4">
                <i className="bi bi-twitter fs-5"></i>
              </span>
              <span className="me-4">
                <i className="bi bi-instagram fs-5"></i>
              </span>
              <span className="me-4">
        
                <i className="bi bi-facebook fs-5"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="enquiry-container container p-5">
        <div className="row overflow-hidden">
          <div className="col-lg-5 " data-aos="fade-left">
            <img src={contact} className="w-100 h-100" alt="error" />
          </div>
          <div className="col-lg-7 formEnquiry " data-aos="fade-right">
            <SendEnquiry />
          </div>
        </div>
        
      </section>
      <section className="container px-5  ">
        <div className="row">
          <div className="col-lg-12 map  p-1">
          <iframe
          title="Google Map showing Jayanagar, Bengaluru location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7624036278703!2d77.57829497489215!3d12.922986687387924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159e40de4573%3A0x26e125d5722519ca!2s4%2C%205th%20Main%20Rd%2C%205th%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560011!5e0!3m2!1sen!2sin!4v1738342002036!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen="yes"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
          </div>
        </div>
        
      </section>
    
    </section>
  );
};

export default Contact;
