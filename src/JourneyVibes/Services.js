import React, { useEffect, useState } from "react";
import "./Services.css";

import axios from "axios";
import Aos from "aos";
import 'aos/dist/aos.css'
import { NavLink } from "react-router-dom";

  
const Services = () => {
 useEffect (()=>{
    Aos.init( {duration:1000});

  },[])
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  



  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get(`https://journeyvibes-server-gtir.onrender.com/services`)
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <section className="">
      <section className="services_background">
        <div className="container-fluid p-0">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>Services</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/">Home </NavLink></h5>
                <span className=""> Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container pt-5 px-5 services-main ">
        <div className="row">
          <div className="col-lg-12">
            <p  data-aos="fade-up">
              At Journey Vibes, we specialize in curating memorable
              travel experiences tailored to your needs. Whether you're seeking
              a relaxing vacation, an adventurous escape, or a business retreat,
              our diverse services ensure that every aspect of your journey is
              perfectly planned and executed. Discover our comprehensive range
              of services below:
            </p>
          </div>
          
        </div>
      </section>
      <section className="container p-5 services-container  ">
        <h1>Our Services</h1>
        <div className="row ">
          {services.map((service, index) => {
            return (
              <div key={index} className="service-data col-md-6 col-lg-4 col-xl-3 mb-3 ">
                <div className="card  bg-transparent w-100 h-100 shadow"  data-aos="fade-up-right">
                  <img
                    src={service.image}
                    className="container p-2 "
                    alt="error"
                  />

                  <div className="card-body">
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

     
    </section>
  );
};

export default Services;
