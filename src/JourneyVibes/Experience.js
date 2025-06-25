import React, { useEffect } from "react";
import exp from "./assets/experience.jpg";
import rating from "./assets/rating.jpg";
import CountUp from "react-countup";
import Aos from "aos";
import 'aos/dist/aos.css'

  
const Experience = () => {
  useEffect (()=>{
    Aos.init( {duration:2000});

  },[])
  return (
    <div className="container p-5">
      <div className="row exp-container" >
        <div className="col-md-5 col-lg-5  " data-aos = "fade-right">
          <img src={exp}  alt="error" />
          <div className="rating d-flex flex-column sub w-25">
            <span>How Your Experience</span>
            <img src={rating} className="w-75 h-100 px-1" alt="error" />
          </div>
        </div>
        <div className="container p-5 text-center col-md-7 col-lg-7 side-elementor " data-aos = "fade-left">
          <h1 className="mb-3">Our Experience</h1>
          <h3 className="mb-3">With our experience we will serve you</h3>
          <p className="mb-3">
            from the day of our inception, we have placed great emphasis on
            ensuring that our users enjoy maximum convenience when using our
            services. we achieve this by offering affordable prices and a
            hassle-free experience.
          </p>
          <div className="container side-elementor-rating">
            <div className="row " >
              <div className="col-lg-4 text-center g-3" >
                <div className=" fs-4 fw-bold" ><CountUp start={0} end={5} duration={100} delay={1}/>+</div>
                <div className="fs-6 fw-bold">Years Experience</div>
              </div>
              <div className="col-lg-4 text-center g-3 ">
                <div className=" fs-4 fw-bold"><CountUp start={0} end={100} duration={100} delay={1}/>+</div>
                <div className="fs-6 fw-bold">Destination Collaboration</div>
              </div>
              <div className="col-lg-4 text-center g-3">
                <div className=" fs-4 fw-bold"><CountUp start={0} end={500} duration={100} delay={1}/>+</div>
                <div className=" fs-6 fw-bold">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
