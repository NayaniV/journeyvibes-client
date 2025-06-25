import React, { useEffect } from "react";
import Features from "./Features";
import bg1 from "./assets/bg1.jpg";
import nature from "./assets/nature.jpg";
import piligrimage from "./assets/piligramage.jpg";
import leisure from "./assets/leisure.jpg";
import heritage from "./assets/heritage.jpg";
import adventure from "./assets/adventure.jpeg";
import wellness from "./assets/welness.jpg";
import honeymoon from "./assets/honeymoon.jpg";
import beach from "./assets/beach.jpg";
import about from "./assets/about.jpeg";
import tajmahal from "./assets/tajmahal.webp";
import jaipur from "./assets/jaipur.jpg";
import varanasi from "./assets/varanasi.jpeg";
import kerala from "./assets/kerala.jpg";
import jammu from "./assets/jammu.jpg";
import goa from "./assets/goa.jpeg";
import mysore from "./assets/mysore.jpg";
import andaman from "./assets/andaman.jpg";
import Choosing from "./Choosing";
import Experience from "./Experience";
import { NavLink } from "react-router-dom";
import Testimonial from "./Testimonial";
import Aos from "aos";
import 'aos/dist/aos.css'
import Offering from "./Offering";
const Home = () => {
  useEffect (()=>{
    Aos.init( {duration:1000});


  },[])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <section className="overflow-hidden">
      <section className="main-background ">
       <img src={bg1} alt="error"/>
        <div className="video-content animate__animated animate__zoomIn animate__delay-1s ">
          <h1 className="mb-3">Experience life through travel</h1>
          <p className="mb-3">
            Your dream destinations await, let's create memories together.
          </p>
          <NavLink to={'/tours'}><button>Explore More</button></NavLink>
        </div>
      </section>
      <section className="container p-5 about-container">
        <div className="row">
          <div className="col-lg-6">
            <img src={about} className="w-100 h-100" alt="error" data-aos = "fade-right" />
          </div>
          <div className="col-lg-6 container py-5 "data-aos = "fade-left" >
            <h1>About Us</h1>
            <p>
              Welcome to JOURNEY VIBES, where your travel dreams come to life!
              We are a passionate team of travel enthusiasts dedicated to
              providing exceptional travel experiences that cater to your unique
              interests and preferences. Whether you’re looking for a relaxing
              beach getaway, an adventurous trek, or a cultural exploration,
              we’ve got you covered.
            </p>
            <NavLink to={'/about'}><button>Read More</button></NavLink>
          </div>
        </div>
      </section>
      <section className="container px-5 py-2 destination_elementor">
        <div className="text-center">
          <h3>know about some places before your travel</h3>
          <h1 className="mb-3">Top destination for your next vacation</h1>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-3 ">
            <div className="card " data-aos="fade-down-right">
              <img src={tajmahal} alt="error" />
              <div className="intro">
                <h1>Taj Mahal, Agra</h1>
                <p>
                  One of the most iconic landmarks in the world, the Taj Mahal
                  is a symbol of love and a UNESCO World Heritage Site. Its
                  stunning marble architecture and beautiful surroundings make
                  it a must-visit destination.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 ">
            <div className="card" data-aos="fade-down-right">
              <img src={jaipur} alt="error" />
              <div className="intro">
                <h1>Jaipur</h1>
                <p>
                  Known as the "Pink City," Jaipur is famous for its majestic
                  palaces, forts, and vibrant bazaars. Don't miss attractions
                  like the Amber Fort, Hawa Mahal, and City Palace.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 ">
            <div className="card" data-aos="fade-down-right">
              <img src={varanasi} alt="error" />
              <div className="intro">
                <h1>Varanasi</h1>
                <p>
                  Varanasi is one of the oldest living cities in the world and
                  holds immense spiritual significance for Hindus. The ghats
                  along the Ganges River and the temples offer a glimpse into
                  India’s deep spiritual and cultural traditions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 ">
            <div className="card" data-aos="fade-down-right">
              <img src={kerala} alt="error" />
              <div className="intro">
                <h1>Kerala</h1>
                <p>
                  Kerala’s backwaters are an exquisite network of lakes, canals,
                  and rivers surrounded by lush greenery. A houseboat ride
                  through these tranquil waters offers an unforgettable
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 ">
            <div className="card" data-aos="fade-down-right">
              <img src={jammu} alt="error" />
              <div className="intro">
                <h1>Leh-Ladakh</h1>
                <p>
                  A high-altitude desert region in the Himalayas, Leh-Ladakh is
                  known for its stunning landscapes, Buddhist monasteries, and
                  adventure activities like trekking, biking, and rafting.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className=" card" data-aos="fade-down-right">
              <img src={goa} alt="error" />
              <div className="intro">
                <h1>Goa</h1>
                <p>
                  Famous for its beautiful beaches, vibrant nightlife, and
                  Portuguese-influenced architecture, Goa is a top destination
                  for those seeking relaxation or a lively party atmosphere.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 ">
            <div className="card" data-aos="fade-down-right">
              <img src={mysore} alt="error" />
              <div className="intro">
                <h1>Mysore</h1>
                <p>
                  Mysore is renowned for its royal heritage, and the Mysore
                  Palace is one of the most magnificent royal residences in
                  India. The city is also famous for its rich culture, yoga
                  centers, and the grand Dussehra festival.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 ">
            <div className="card" data-aos="fade-down-right">
              <img src={andaman} alt="error" />
              <div className="intro">
                <h1>A & N Islands</h1>
                <p>
                  A tropical paradise in the Bay of Bengal, these islands are
                  known for their crystal-clear waters, pristine beaches, and
                  vibrant coral reefs, making it an excellent destination for
                  diving, snorkeling, and beach lovers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Offering/>
      <Features />
      <section className="conatiner p-5 vacation_elementor">
        <div className="text-center">
          <h3>custom vacations to your favourite destination</h3>
          <h1 className="mb-4">
            choose the <span>type vacation</span> you want !!!
          </h1>
          <div className=" container  vacation-type-container ">
            <div className="row ">
              <div className=" col-md-6 col-lg-4 col-xl-3 vacation-type  mb-3 " data-aos="flip-left">
                <div className="zoom-wrapper mb-5">
                  <img src={nature} className="w-100 h-100 " alt="error" />
                </div>

                <h5>Nature</h5>
              </div>
              <div className=" col-md-6 col-lg-4 col-xl-3 vacation-type mb-3" data-aos="flip-right">
                <div className="zoom-wrapper">
                  <img src={piligrimage} className="w-100 h-100" alt="error" />
                </div>
                <h5>Piligrimage</h5>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 vacation-type mb-3" data-aos="flip-left">
                <div className="zoom-wrapper ">
                  <img src={leisure} className="w-100 h-100" alt="error" />
                </div>

                <h5>Leisure</h5>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 vacation-type mb-3" data-aos="flip-right">
                <div className="zoom-wrapper">
                  <img src={heritage} className="w-100 h-100" alt="error" />
                </div>

                <h5>Heritage</h5>
              </div>
           

            <div className="col-md-6 col-lg-4 col-xl-3 vacation-type  mb-3" data-aos="flip-left">
              <div className="zoom-wrapper">
                <img src={adventure} className="w-100 h-100" alt="error" />
              </div>

              <h5>Adventure</h5>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 vacation-type mb-3" data-aos="flip-right">
              <div className="zoom-wrapper">
                <img src={wellness} className="w-100 h-100 " alt="error" />
              </div>

              <h5>Wellness</h5>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 vacation-type mb-3" data-aos="flip-left">
              <div className="zoom-wrapper">
                <img src={honeymoon} className="w-100 h-100" alt="error" />
              </div>

              <h5>Honeymoon</h5>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 vacation-type mb-3" data-aos="flip-right">
              <div className="zoom-wrapper">
                <img src={beach} className="w-100 h-100" alt="error" />
              </div>

              <h5>Beach</h5>
            </div>
          </div>
          </div>
        </div>
      </section>
      <Choosing />
      <section className="cont-container container mt-5">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-9">
              <h3 className="mb-4">Dont Miss Out</h3>
              <h1>
                Your next great adventure starts here!
              </h1>
              <p>Explore breathtaking destinations,experience new cultures, and make unforgettable memories.</p>
              <p>Let us help ypu plan the perfect trip!</p>
            </div>
            <div className="col-lg-3 align-content-center">
             <NavLink to={'/contact'}><button className="  ">Get in touch</button></NavLink> 
            </div>
          </div>
        </div>
      </section>
      <Experience/>
      <Testimonial/>
    </section>
    </>
  );
};

export default Home;
