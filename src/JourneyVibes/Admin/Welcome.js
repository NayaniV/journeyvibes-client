import React, { useEffect } from "react";
import bg from "./assets/bg1.avif";
import useCallApi from "./CallApi";
import CountUp from "react-countup";
import ChartOne from "./ChartOne";




const Welcome = () => {
  const tours = useCallApi(`https://journeyvibes-server-gtir.onrender.com/tours`);
  const services = useCallApi(`https://journeyvibes-server-gtir.onrender.com/services`);
  const blogs = useCallApi(`https://journeyvibes-server-gtir.onrender.com/blogs`);
  const enquiries = useCallApi(`https://journeyvibes-server-gtir.onrender.com/enquiries`);
   const usersignups = useCallApi(`https://journeyvibes-server-gtir.onrender.com/usersignup`);
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="container p-5">
      <div className="row justify-content-center welcome">
        <div className="col-lg-6">
          <h1>
            Welcome to <span> JOURNEY VIBES</span> TOURS AND TRAVELS
          </h1>
          <p>
            At Journey Vibes, we believe that travel is more than just a
            destination—it's about the experiences, the memories, and the
            connections we make along the way. Whether you're looking to explore
            exotic locations, embark on thrilling adventures, or simply relax in
            a serene paradise, we curate the perfect travel experiences to match
            your unique vibe. Let us take you on a journey filled with
            breathtaking views, unforgettable moments, and the spirit of
            adventure. Join us and make your travel dreams come true!
          </p>
        </div>
        <div className="col-lg-6">
          <img src={bg} className="w-100 h-100" alt="error" />
        </div>
      </div>
      <div className="row api mt-5  ">
        <div className="col-md-6 col-lg-4">
          <div className="card mb-3 bg-light">
            <div className="card-body text-center fw-bold">
              <h2
                className="card-title fs-4 fw-bold"
                style={{ color: "#f04223" }}
              >
                <span>
                  <CountUp
                    start={0}
                    end={tours.length}
                    duration={10}
                    delay={1}
                  />
                  +
                </span>
              </h2>
              <h5
                className="card-title fs-5 fw-bold"
                style={{ color: "##0e420e" }}
              >
                Tours
              </h5>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-lg-4">
          <div className="card mb-3 bg-light">
            <div className="card-body text-center fw-bold">
              <h2
                className="card-title fs-4 fw-bold"
                style={{ color: "#f04223" }}
              >
                <span>
                  <CountUp
                    start={0}
                    end={services.length}
                    duration={10}
                    delay={1}
                  />
                  +
                </span>
              </h2>
              <h5
                className="card-title fs-5 fw-bold"
                style={{ color: "##0e420e" }}
              >
                Services
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card mb-3 bg-light">
            <div className="card-body text-center fw-bold">
              <h2
                className="card-title fs-4 fw-bold"
                style={{ color: "#f04223" }}
              >
                <span>
                  <CountUp
                    start={0}
                    end={blogs.length}
                    duration={10}
                    delay={1}
                  />
                  +
                </span>
              </h2>
              <h5
                className="card-title fs-5 fw-bold"
                style={{ color: "##0e420e" }}
              >
                Blogs
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card mb-3 bg-light">
            <div className="card-body text-center fw-bold">
              <h2
                className="card-title fs-4 fw-bold"
                style={{ color: "#f04223" }}
              >
                <span>
                  <CountUp
                    start={0}
                    end={enquiries.length}
                    duration={10}
                    delay={1}
                  />
                  +
                </span>
              </h2>
              <h5
                className="card-title fs-5 fw-bold"
                style={{ color: "##0e420e" }}
              >
                Enquiries
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card mb-3 bg-light">
            <div className="card-body text-center fw-bold">
              <h2
                className="card-title fs-4 fw-bold"
                style={{ color: "#f04223" }}
              >
                <span>
                  <CountUp
                    start={0}
                    end={usersignups.length}
                    duration={10}
                    delay={1}
                  />
                  +
                </span>
              </h2>
              <h5
                className="card-title fs-5 fw-bold"
                style={{ color: "##0e420e" }}
              >
                Users
              </h5>
            </div>
          </div>
        </div>
      </div>
      <ChartOne/>

    </div>
  );
};

export default Welcome;
