import React, { useEffect } from "react";
import feature1 from "./assets/feature1.png";
import feature2 from "./assets/feature2.png";
import feature3 from "./assets/feature3.png";
import feature4 from "./assets/feature4.png";
import Aos from "aos";
import 'aos/dist/aos.css'

 

const Features = () => {
  useEffect(()=>{
    Aos.init( {duration:2000});

  },[])
  const data = [
    {
      image: feature1,
      title: "Discover the possibilities",
      description:
        "With nearly half a million attractions,hotels & more, you're sure to find joy.",
    },
    {
      image: feature2,
      title: "Enjoy deals & delights",
      description:
        "Quality activities. Great prices. Plus, earn credits to save more.",
    },
    {
      image: feature3,
      title: "Exploring made Easyt",
      description:
        "Book last minute,skip lines & amp; get free cancellation for easier exploring.",
    },
    {
      image: feature4,
      title: "Travel you can Trust",
      description:
        "Read reviews & get reliable customer support. We're with you at every step.",
    },
  ];
  return (
   
    <div className="features pt-5 ">
      <h1 className="text-center mb-5">Why book with us?</h1>
      <div className="container p-3  ">
      <div className=" row  text-center  ">
        {data.map((feature, index) => {
          return (
            <div key={index} className=" features-data col-md-6 col-lg-3  mb-3  ">
              <div className="card shadow w-100 h-100 " data-aos="fade-down-left">
                <img src={feature.image} className=" container p-2" alt="error" />
                <div className="card-body">
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
           
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Features;
