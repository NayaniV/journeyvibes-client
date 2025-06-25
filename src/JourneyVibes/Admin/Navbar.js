import React from "react";

import icon from "./assets/profile_11045297.png";
import "./Admin.css";

const Navbar = () => {
  return (
    <div className="navbars py-4 " style={{ background: "antiquewhite" }}>
      <div className="container-fluid px-3 d-flex justify-content-between">
      
          
         
            <div
              className="search-container     "
              
            >
              <input type="text" className="search-input" placeholder="Search..." />
              <button className="search-btn">
                <i className="bi bi-search"></i>
              </button>
            </div>
    
            <div
              className="d-flex  icons    "
              
            >
              <div className="mt-2">
                <h1 className="h-25">Nayani</h1>
                <span style={{ color: "black" }} className="fw-bold">
                  Admin
                </span>
              </div>
              <div>
                <img src={icon} alt="error" />
              </div>
            </div>
          </div>
        </div>
     
  );
};

export default Navbar;
