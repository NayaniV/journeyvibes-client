import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Offering = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const slideWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingLeft: "16px",
    paddingRight: "16px",
  };

  
  const cardStyle = {
    minHeight: "220px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "16px",
  };

  return (
    <section className="text-white py-3 offering">
      <div className="container text-center">
        <span
          className="fs-3 text-uppercase fw-bold mb-2 p-3"
          style={{ color: "#ff6347" }}
        >
          What we are offering 
        </span>
        <h2 className="mb-4  mt-3">
          Experience real adventure and nature across India
        </h2>

        <div className="container p-3">
          <Slider {...settings}>
            <div className="offering1" style={slideWrapperStyle}>
              <div
                className="bg-secondary text-white rounded shadow-sm d-flex flex-column"
                style={cardStyle}
              >
                <i className="bi-globe-americas fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold fs-5 mb-2">Eco Village Stays</h5>
                <p className="fs-6 flex-grow-1">
                  Sustainable living in rural Kerala and Maharashtra.
                </p>
              </div>
            </div>

            <div className="offering2" style={slideWrapperStyle}>
              <div
                className="bg-secondary text-white rounded shadow-sm d-flex flex-column"
                style={cardStyle}
              >
                <i className="bi-bicycle fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold fs-5 mb-2">Countryside Cycling</h5>
                <p className="fs-6 flex-grow-1">
                  Ride through Tamil Nadu and Sikkim’s serene trails.
                </p>
              </div>
            </div>

            <div className="offering3" style={slideWrapperStyle}>
              <div
                className="bg-secondary text-white rounded shadow-sm d-flex flex-column"
                style={cardStyle}
              >
                <i className="bi-stars fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold fs-5 mb-2">Astro Camps</h5>
                <p className="fs-6 flex-grow-1">
                  Stargaze from Ladakh and the Rann of Kutch.
                </p>
              </div>
            </div>

            <div className="offering4" style={slideWrapperStyle}>
              <div
                className="bg-secondary text-white rounded shadow-sm d-flex flex-column"
                style={cardStyle}
              >
                <i className="bi-emoji-smile fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold fs-5 mb-2">Mindfulness Retreats</h5>
                <p className="fs-6 flex-grow-1">
                  Yoga and wellness retreats in Rishikesh and Goa.
                </p>
              </div>
            </div>

            <div className="offering5" style={slideWrapperStyle}>
              <div
                className="bg-secondary text-white rounded shadow-sm d-flex flex-column"
                style={cardStyle}
              >
                <i className="bi-lightning-fill fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold fs-5 mb-2">Zipline Adventure</h5>
                <p className="fs-6 flex-grow-1">
                  Zipline over forests in Coorg and Rishikesh.
                </p>
              </div>
            </div>

            <div className="offering6" style={slideWrapperStyle}>
              <div
                className="bg-secondary text-white rounded shadow-sm d-flex flex-column"
                style={cardStyle}
              >
                <i className="bi-brush fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold fs-5 mb-2">Nature Art Workshops</h5>
                <p className="fs-6 flex-grow-1">
                  Create eco-art in Himachal’s scenic villages.
                </p>
              </div>
            </div>

            <div className="offering7" style={slideWrapperStyle}>
              <div
                className="bg-secondary text-white rounded shadow-sm d-flex flex-column"
                style={cardStyle}
              >
                <i className="bi-cup-hot fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold fs-5 mb-2">Campfire Cooking</h5>
                <p className="fs-6 flex-grow-1">
                  Cook traditional dishes in Uttarakhand forests.
                </p>
              </div>
            </div>

            <div className="offering8" style={slideWrapperStyle}>
              <div
                className="bg-secondary text-white rounded shadow-sm d-flex flex-column"
                style={cardStyle}
              >
                <i className="bi-camera-reels fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold fs-5 mb-2">Wildlife Photography</h5>
                <p className="fs-6 flex-grow-1">
                  Shoot tigers and birds in Jim Corbett & Kaziranga.
                </p>
              </div>
            </div>

            <div className="offering9" style={slideWrapperStyle}>
              <div
                className="bg-secondary text-white rounded shadow-sm d-flex flex-column"
                style={cardStyle}
              >
                <i className="bi-cast fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold fs-5 mb-2">Digital Detox Cabins</h5>
                <p className="fs-6 flex-grow-1">
                  Unplug in the Western Ghats or Northeast valleys.
                </p>
              </div>
            </div>

            <div className="offering10" style={slideWrapperStyle}>
              <div
                className="bg-secondary text-white rounded shadow-sm d-flex flex-column"
                style={cardStyle}
              >
                <i className="bi-map fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold fs-5 mb-2">Hidden Trails</h5>
                <p className="fs-6 flex-grow-1">
                  Explore secret Himalayan & Sahyadri paths.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Offering;
