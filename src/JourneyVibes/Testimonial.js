import React from "react";
import Slider from "react-slick";
import q1 from "./assets/q1.png";
import q2 from "./assets/q2.png";
import q3 from "./assets/q3.png";
import q4 from "./assets/q4.png";
import q5 from "./assets/q5.png";
import q6 from "./assets/q6.png";
import q7 from "./assets/q7.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {
    img: q1,
    name: "Rajesh Kumar",
    role: "Software Engineer",
    review:
      "I had an incredible experience with this travel agency! The itinerary was perfectly organized, showcasing breathtaking sights and local gems. The accommodations were comfortable, and the guides were knowledgeable. The team was always available, making the trip stress-free. Highly recommend this agency for a well-organized vacation!",
  },
  {
    img: q2,
    name: "Priya Sharma",
    role: "Marketing Manager",
    review:
      "My vacation was exceptional! Every detail, from flights to the itinerary, was perfectly planned. The destinations were beautiful, activities exciting, and accommodations fantastic. I never worried about a thing. The local guides were informative. I highly recommend this agency for stress-free, seamless vacations that turn dreams into reality!",
  },
  {
    img: q3,
    name: "Amit Verma",
    role: "Doctor",
    review:
      "Booking with this agency was one of my best decisions. The service was impeccable, with a perfect balance of adventure, sightseeing, and relaxation. The accommodations were top-notch, and the local guides were friendly and knowledgeable. I felt well taken care of and will definitely book again!",
  },
  {
    img: q4,
    name: "Neha Gupta",
    role: "Teacher",
    review:
      "My experience with this travel agency was incredible! The itinerary was perfectly organized with diverse experiences and breathtaking sights. The guides were knowledgeable, and the accommodations were comfortable. Every detail was taken care of, making the trip stress-free. I highly recommend this agency for an unforgettable, well-organized vacation!",
  },
  {
    img: q5,
    name: "Sandeep Reddy",
    role: "Entrepreneur",
    review:
      "My experience with this agency was outstanding! The team tailored the trip to my preferences, with exciting experiences and hidden gems. They handled everything, from transportation to tours. The accommodations were top-quality, and the guides were friendly and knowledgeable. Highly recommend this agency for a hassle-free, enjoyable vacation!",
  },
  {
    img: q6,
    name: "Anjali Mehta",
    role: "Graphic Designer",
    review:
      "This travel agency provided an exceptional experience! The trip was well-planned, with the perfect mix of sightseeing, adventure, and relaxation. The staff was helpful, and everything ran smoothly. The accommodations were amazing, and the guides were knowledgeable. Highly recommend this agency for a personalized, worry-free travel experience!",
  },
  {
    img: q7,
    name: "Vikram Patel",
    role: "Financial Advisor",
    review:
      "My journey with this travel agency was incredible! They flawlessly organized every detail, from airport transfers to unique sightseeing. The accommodations were outstanding, and the guides provided great local insights. The trip was stress-free, and I felt well taken care of. Highly recommend this agency for personalized, unforgettable experiences!",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, arrows: false },
      },
    ],
  };

  return (
    <div className="container p-5 testimonial">
      <h2 className="text-center mb-4" aria-label="Client testimonials section">
        What Our Clients Say About Us?
      </h2>
      <div className="row justify-content-center">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-slide px-2">
              <div className="card h-100 d-flex flex-column justify-content-between bg-light text-center">
                <div className="card-body d-flex flex-column">
                  <img
                    src={item.img}
                 
                    className="mx-auto mb-3"
                    alt="error"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                  <p className="mb-3 flex-grow-1">"{item.review}"</p>
                  <div>
                    <h3 className="mb-1">{item.name}</h3>
                    <h5 className="text-muted">{item.role}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
