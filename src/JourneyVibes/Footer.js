import React from "react";
import "./Footer.css";
import t1 from "./assets/t1.webp"
import t2 from "./assets/t2.png"
import t3 from "./assets/t3.png"
import t4 from "./assets/t4.png"
import t5 from "./assets/t5.webp"
import pay from "./assets/pay.jpg"
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footer-container overflow-hidden mt-5   ">
      <div className="row text-center mx-5">
        <div className="col-md-6 col-lg-4 col-xl-3 address mt-4">
          <h1>Journey Vibes</h1>
          <div className="mb-3">
          <i className="bi bi-geo-alt"></i>  
          <span className="ms-2">
          44/1, Bharat Apartment, 4C 5th Main Road, Jayanagar, Bangalore 560041, KA, IND
          </span>
          </div>
          <div className="mb-3">
          <i className="bi bi-envelope-check-fill"></i>
          <span className="ms-2"> support@journeyvibes.com</span>
          </div>
          <div className="mb-3">
          <i className="bi bi-telephone-outbound-fill"></i>
          <span className="ms-2">  +91 8712054298</span>
          </div>
          
        </div>
        <div className="col-md-6 col-lg-4 col-xl-2 mt-4 links">
          <h1>Quick Links</h1>
          <ul>
            <NavLink to={'/'}><li>Home</li></NavLink>
            <NavLink to={'/about'}><li>About Us</li></NavLink>
            <NavLink to={'/tours'}><li>Tours</li></NavLink>
            <NavLink to={'/services'}><li>Services</li></NavLink>
            <NavLink to={'/blog'}><li>Blog</li></NavLink>
            <NavLink to={'/gallery'}><li>Gallery</li></NavLink>
            <NavLink to={'/contact'}> <li>Contact </li></NavLink>
            
            
            
            
            
            
           
          </ul>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 destinations mt-4">
          <h1>Top Destinations</h1>
          <ul>
            <li>Agra</li>
            <li>Jaipur</li>
            <li>Varanasi</li>
            <li>Kerala</li>
            <li>Leh-Ladakh</li>
            <li>Goa</li>
            <li>Mysore </li>
            <li> A & N Islands </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-4 mt-4 awards-container">
          
          <h1>RESPONSIBLE TOURISM AWARDS</h1>
          <div className="d-flex">
            <img src={t1} alt="error"/>
            <img src={t2} alt="error"/>
            <img src={t3} alt="error"/>
            <img src={t4} alt="error"/>
            <img src={t5} alt="error"/>
          </div>
          <h3>Newsletter</h3>
          <div className="d-flex">
            <input type="email" placeholder="Email Address"  className="form-control"/>
            <button className="ms-2">Submit</button>
          </div>
          <h3>Follow Us</h3>
          <span className="me-4 "><i className="bi bi-youtube fs-5"></i></span>
              <span className="me-4 "><i className="bi bi-twitter fs-5"></i></span>
              <span className="me-4"><i className="bi bi-instagram fs-5"></i></span>
              <span className="me-4"> <i className="bi bi-facebook fs-5"></i></span>
              <span className="me-4"> <i className="bi bi-linkedin fs-5"></i></span>
          
          
        </div>
      </div>
      <div className="container p-5 footer-container1">
        <div className="row">
          <div className="col-lg-6 mb-3 ">
          <h5>&copy; Copyright 2025 JourneyVibes. All Rights Reserved.</h5>
          </div>
          <div className="col-lg-6">
         <img src={pay} className="w-100 h-100 shadow"  alt="error"/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
