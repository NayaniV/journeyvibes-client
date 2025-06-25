import React, { useEffect } from "react";
import "./About.css";
import employee from "./assets/employee.png";
import award from "./assets/award.png";
import engaged from "./assets/engaged.png";
import connected from "./assets/connected.png";
import customer from "./assets/happy.svg";
import culture from "./assets/culture.svg";
import sustain from "./assets/sustain.svg";
import ethics from "./assets/ethical.svg";
import innovate from "./assets/innovate.svg";
import safety from "./assets/safety.svg";
import vission from "./assets/vision.jpg";
import mission from "./assets/mission.jpg";
import team1 from "./assets/tm12.jpg";
import team2 from "./assets/tm-2.jpg";
import team3 from "./assets/tm-3.jpg";
import team4 from "./assets/tm-4.jpg";
import team5 from "./assets/tm-5.jpg";
import team6 from "./assets/tm-6.jpg";
import team7 from "./assets/tm-7.jpg";
import team8 from "./assets/tm-8.jpg";
import Aos from "aos";
import 'aos/dist/aos.css'
import { NavLink } from "react-router-dom";

  
const About = () => {
 useEffect (()=>{
    Aos.init( {duration:1000});

  },[])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <section className="about_background">
        <div className="container-fluid p-0">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>About Us</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/">Home </NavLink></h5>
                <span className=""> About</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container p-5">
        <ul
          className="nav nav-pills nav-fill mb-3"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-mission-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-mission"
              type="button"
              role="tab"
              aria-controls="pills-mission"
              aria-selected="true"
            >
              Our Mission
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-vision-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-vision"
              type="button"
              role="tab"
              aria-controls="pills-vision"
              aria-selected="false"
            >
              Our Vision
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-values-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-values"
              type="button"
              role="tab"
              aria-controls="pills-values"
              aria-selected="false"
            >
              Our Values
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-different-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-different"
              type="button"
              role="tab"
              aria-controls="pills-different"
              aria-selected="false"
            >
              What Makes Us Different
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-mission"
            role="tabpanel"
            aria-labelledby="pills-mission-tab"
            tabindex="0"
          >
            <div className="container py-5 mission-container">
              <div className="row">
                <div className="col-lg-6">
                  <img src={mission} className="w-100 h-100" alt="error" />
                </div>
                <div className="col-lg-6 mt-3">
                  <p>
                    "At Journey Vibes Tours and Travels, our mission is to
                    provide exceptional, tailored travel experiences that meet
                    the unique needs of each traveler. We are committed to
                    delivering top-quality service, ensuring every journey is
                    seamless, enriching, and memorable. Our goal is to offer a
                    diverse range of destinations, fostering cultural
                    exploration, and connecting people to the beauty of the
                    world. We strive to build lasting relationships with our
                    clients, providing personalized guidance and support, and
                    promoting sustainable travel practices that respect local
                    communities and environments. We aim to make every trip an
                    unforgettable adventure."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-vision"
            role="tabpanel"
            aria-labelledby="pills-vision-tab"
            tabindex="0"
          >
            <div className="container py-5 vission-container">
              <div className="row">
                <div className="col-lg-6">
                  <img src={vission} className="w-100 h-100" alt="error" />
                </div>
                <div className="col-lg-6 mt-3">
                  <p>
                    "At Journey Vibes Tours and Travels, our vision is to become
                    a trusted leader in the travel industry by offering
                    personalized and transformative travel experiences. We aim
                    to inspire a sense of adventure, discovery, and connection
                    with diverse cultures across the globe. Through our
                    commitment to excellence, customer satisfaction, and
                    sustainable tourism, we strive to provide unforgettable
                    journeys that leave a positive impact on both travelers and
                    the destinations they visit. Our goal is to ensure every
                    traveler feels valued, respected, and connected to the world
                    in ways that foster lifelong memories and meaningful
                    experiences."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-values"
            role="tabpanel"
            aria-labelledby="pills-values-tab"
            tabindex="0"
          >
            <div className="container py-5">
              <div className="row values-container   ">
                <div className="col-lg-6 mb-3 values-data ">
                  <div className="card  bg-transparent w-100 h-100 shadow">
                    <img src={customer} alt="error" />

                    <div className="card-body">
                      <h2>Customer Satisfaction</h2>
                      <p>
                        Our customer is our top priority. We take pride in
                        delivering exceptional, personalized tour experiences
                        tailored to every need and preference. We strive to
                        exceed expectations by providing high-quality service,
                        addressing concerns promptly, and ensuring a seamless,
                        enjoyable travel experience. Your satisfaction is the
                        cornerstone of our service.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-3 values-data ">
                  <div className="card bg-transparent w-100 h-100 shadow">
                    <img src={ethics} alt="error" />
                    <div className="card-body">
                      <h2>Ethical Conduct and Integrity</h2>
                      <p>
                        We conduct our business with the highest standards of
                        integrity, honesty, and transparency. Our ethical
                        framework guides us in fair and responsible business
                        practices, the ethical treatment of employees and
                        suppliers, and strict adherence to legal and industry
                        regulations, ensuring trust and fairness in all our
                        interactions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-3 values-data ">
                  <div className="card bg-transparent w-100 h-100 shadow">
                    <img src={innovate} alt="error" />
                    <div className="card-body">
                      <h2>Innovation and Creativity</h2>
                      <p>
                        We embrace innovation and creativity to provide unique
                        and memorable tour experiences that highlight India’s
                        diversity and beauty. We strive for continuous learning
                        and improvement by monitoring industry trends, seeking
                        feedback from customers and stakeholders, and adapting
                        to changing preferences.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-3 values-data">
                  <div className="card bg-transparent w-100 h-100 shadow">
                    <img src={safety} alt="error" />
                    <div className="card-body">
                      <h2>Safety</h2>
                      <p>
                        Our company demonstrates resilience in times of crisis,
                        prioritizing client safety and well-being above all
                        else. We provide 24/7 support before, during, and after
                        trips, offering flexible solutions such as itinerary
                        adjustments and refunds to minimize disruptions..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-3 values-data">
                  <div className="card bg-transparent w-100 h-100 shadow">
                    <img src={culture} alt="error" />
                    <div className="card-body">
                      <h2>Preserving Cultural Heritage</h2>
                      <p>
                        We are dedicated to upholding the rich cultural heritage
                        of India by promoting responsible tourism practices. Our
                        tours are designed with a focus on respecting local
                        customs, traditions, and cultural sites, fostering an
                        appreciation for India's diverse cultures, and ensuring
                        that our tourism activities contribute positively to the
                        preservation of cultural heritage
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-3 values-data">
                  <div className="card bg-transparent w-100 h-100 shadow" >
                    <img src={sustain} alt="error" />
                    <div className="card-body">
                      <h2>Sustainability</h2>
                      <p>
                        We are committed to sustainable tourism practices that
                        minimize the carbon footprint of all our services and
                        operations. This includes implementing eco-friendly
                        initiatives such as waste reduction, energy
                        conservation, and promoting sustainable
                        community-oriented tourism that contributes to the
                        livelihoods and socio-economic development of the local
                        communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-different"
            role="tabpanel"
            aria-labelledby="pills-different-tab"
            tabindex="0"
          >
            <div className="row different-container">
              <div className=" col-lg-6  d-flex  mt-5" >
                <img src={employee} className=" me-5" alt="error" />
                <div className=""  >
                  <h3>Employee-Owned</h3>
                  <p>
                    As an employee-owned company, everyone who works at Journey
                    Vibes has a stake in the business. This often leads to a
                    greater commitment to customer satisfaction, as employees
                    are invested in the company’s success. It creates a more
                    passionate and dedicated team who genuinely care about
                    providing exceptional service.
                  </p>
                </div>
              </div>
              <div className=" col-lg-6  d-flex mt-5">
                <img src={award} className=" me-5" alt="error" />
                <div className="">
                  <h3>Award-Winning</h3>
                  <p>
                    Winning awards demonstrates that your company has been
                    recognized by experts and peers in the travel industry for
                    delivering exceptional service, innovative travel
                    experiences, and customer satisfaction. It’s proof that
                    you're not just another travel agency, but one that
                    consistently goes above and beyond.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 d-flex mt-5">
                <img src={engaged} className=" me-5" alt="error" />
                <div className="">
                  <h3>Engaged</h3>
                  <p>
                    Our management team is active on various travel advisory
                    boards and committees for travel organizations, travel
                    magazines (Afar, Travel+Leisure), major hotel brands, and
                    airlines. We are engaged with our industry and our opinions
                    continue to be sought across the broad spectrum of our
                    industry.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 d-flex mt-5">
                <img src={connected} className="me-5" alt="error" />
                <div className="">
                  <h3>Connected</h3>
                  <p>
                    Before the tour even begins, you can connect with your
                    travelers by learning their preferences, interests, and
                    travel goals. This could include asking about their favorite
                    activities, whether they prefer history over nature, or what
                    kind of cultural experiences they’re seeking. By
                    personalizing the tour in advance, you ensure travelers feel
                    the experience is catered specifically to them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container team-elementor  px-5">
        <div className="row mb-4  ">
          <h2 className="text-center">Our Team</h2>
          <div className=" col-md-6 col-lg-4 col-xl-3  mb-3 ">
            <div className="card bg-light w-100 h-100   ">
              <div className="card-head  d-flex justify-content-center align-items-center mt-1 ">
                <img src={team1}  alt="error" />
              </div>
              <div className="card-body">
                <h1>ashok mehta</h1>
                <h3>(Founder & CEO)</h3>
                <p>
                  Oversees the overall direction, vision, and growth of the
                  company. Coordinates with all departments and makes key
                  strategic decisions.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-lg-4 col-xl-3  mb-3 ">
            <div className="card bg-light w-100 h-100">
              <div className="card-head  d-flex justify-content-center align-items-center mt-1 ">
                <img src={team2}  alt="error" />
              </div>
              <div className="card-body">
                <h1>Karthik Varma</h1>
                <h3>(Operations Manager)</h3>
                <p>
                  Manages the logistics of all tours, ensures that travel
                  itineraries are followed and addresses any operational hiccups
                  during the travel process.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-lg-4 col-xl-3 mb-3  ">
            <div className="card bg-light w-100 h-100">
              <div className="card-head  d-flex justify-content-center align-items-center mt-1 ">
                <img src={team3}  alt="error" />
              </div>
              <div className="card-body">
                <h1>Kishan</h1>
                <h3>(Tour Guide-Specialist)</h3>
                <p>
                  Leads groups on tours, educating guests about the history,
                  culture, and significance of the locations visited.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-lg-4 col-xl-3  mb-3  ">
            <div className="card bg-light w-100 h-100">
              <div className="card-head  d-flex justify-content-center align-items-center mt-1 ">
                <img src={team4} alt="error" />
              </div>
              <div className="card-body">
                <h1>Sravya</h1>
                <h3>(Customer Service Specialist)</h3>
                <p>
                  Handles customer inquiries, manages booking processes, and
                  provides after-tour support to ensure customer satisfaction.
                  
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-lg-4 col-xl-3  mb-3 ">
            <div className="card bg-light w-100 h-100">
              <div className="card-head  d-flex justify-content-center align-items-center mt-1 ">
                <img src={team5}  alt="error" />
              </div>
              <div className="card-body">
                <h1>Priyanka</h1>
                <h3>( IT Support/Systems Admin)</h3>
                <p>
                  Handles all IT and technical aspects of the company, from
                  website management to troubleshooting technical issues and
                  maintaining secure systems.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-lg-4 col-xl-3 mb-3   ">
            <div className="card bg-light w-100 h-100">
              <div className="card-head  d-flex justify-content-center align-items-center mt-1 ">
                <img src={team6} alt="error" />
              </div>
              <div className="card-body">
                <h1>Trinadh </h1>
                <h3>(Travel Coordinator)</h3>
                <p>
                  Arranges travel details such as flight bookings,
                  accommodations, transfers, and ensures everything is in place
                  for a smooth trip.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-lg-4 col-xl-3  mb-3">
            <div className="card bg-light w-100 h-100">
              <div className="card-head  d-flex justify-content-center align-items-center mt-1 ">
                <img src={team7}  alt="error" />
              </div>
              <div className="card-body">
                <h1>Sai Kiran</h1>
                <h3>(Photographer)</h3>
                <p>
                  Creates engaging content for marketing purposes, takes photos
                  and videos during tours, and develops visual materials for the
                  company’s website and social media.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-lg-4 col-xl-3  mb-3">
            <div className="card bg-light w-100 h-100">
              <div className="card-head  d-flex justify-content-center align-items-center mt-1 ">
                <img src={team8}  alt="error" />
              </div>
              <div className="card-body">
                <h1>Ajay Kumar</h1>
                <h3>(Financial Officer)</h3>
                <p>
                  Manages the financial aspects of the company, including
                  budgeting, forecasting, and overseeing financial records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
