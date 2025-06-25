import React, { useEffect } from "react";
import "./Gallery.css";
import GalleryImg from "./GalleryImg";
import { NavLink } from "react-router-dom";


const Gallery = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
 
  return (
    <>
      <section className="gallery_background">
        <div className="container-fluid p-0">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>Gallery</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/">Home</NavLink> </h5>
                <span className=""> Gallery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5 px-2 gallery-container">
        <p>
          "Our gallery features stunning photos captured by our customers during
          their unforgettable journeys with us. These images provide a unique,
          personal perspective of the destinations and experiences we offer.
          From breathtaking landscapes to candid moments of local culture, each
          photo tells a story of adventure, discovery, and connection. We love
          sharing these memories with our community and invite future travelers
          to explore the beauty and diversity of the world through the lens of
          those who have been there. Feel inspired, plan your next adventure,
          and maybe your photos will be featured next!"
        </p>
        <GalleryImg/>
        
        
      </section>
    </>
  );
};

export default Gallery;
