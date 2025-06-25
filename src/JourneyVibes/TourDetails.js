import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Booking from "./Booking";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TourDetails = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const [tour, setTour] = useState("");
  const inclusionsArray = tour.inclusions ? tour.inclusions.split(", ") : [];
  const exclusionsArray = tour.exclusions ? tour.exclusions.split(", ") : [];
  const highlightsArray = tour.highlights ? tour.highlights.split(", ") : [];

  useEffect(() => {
    axios
      .get(`https://journeyvibes-server-gtir.onrender.com/tours/${id}`)
      .then((res) => setTour(res.data));
  });
  return (
    <>
      <section className="blog_background">
        <div className="container-fluid p-0">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>TourDetails</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5">Tours </h5>
                <span className=""> TourDetails</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container  py-2 px-5  tour_details">
        <div className="row">
          <div className="col-lg-12"></div>
        </div>
      </section>
      <section>
        <div className="container overflow-hidden px-4 py-3 tour_details">
          <div className="row">
            <div className="col-lg-8">
              <Carousel className="main-slide">
                <div>
                  <img src={tour.image} alt="error" />
                </div>
                <div>
                  <img src={tour.image1} alt="error" />
                </div>
                <div>
                  <img src={tour.image2} alt="error" />
                </div>
                <div>
                  <img src={tour.image3} alt="error" />
                </div>
                <div>
                  <img src={tour.image4} alt="error" />
                </div>
              </Carousel>
              <h2 data-aos="fade-up" className=" text-center">
                {tour.destination}
              </h2>

              <p className="overflow-hidden" data-aos="fade-left">{tour.description}</p>

              <h5 data-aos="fade-down" className="text-center mb-3">
                Price: <i className="bi bi-currency-rupee"></i>
                {tour.rate}
              </h5>

              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button fs-5 fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Tour Inclusions
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show "
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className="">
                        {inclusionsArray.map((inclusions, index) => (
                          <li key={index} className="mb-2">
                            {inclusions}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5 fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Tour Exclusions
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className="">
                        {exclusionsArray.map((exclusions, index) => (
                          <li key={index} className="mb-2">
                            {exclusions}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-5 fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Tour Highlights
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className="">
                        {highlightsArray.map((highlights, index) => (
                          <li key={index} className="mb-2">
                            {highlights}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <Booking />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourDetails;
