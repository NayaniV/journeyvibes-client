import React, { useContext, useEffect, useState } from "react";

import { loginStatus } from "../../App";
import icon from "./assets/profile_11045297.avif";
import mainBanner from "./assets/logo.png";

import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Admin.css";
import axios from "axios";

const Dashboard = () => {

  const [token, setToken] = useContext(loginStatus);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (token === "") {
      navigate("/admin"); 
    } else {
      axios
        .get("https://journeyvibes-server-gtir.onrender.com/dashboard", {
          headers: {
            "x-token": token,
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token, navigate]);

 
  return (
    <div className="container-fluid">
      <div className="admin-nav px-5 py-3" style={{ background: "antiquewhite" }}>
        <div className="container-fluid">
          <div className="row align-items-center text-center text-lg-start">
            <div className="col-12 col-lg-4 mb-3 mb-lg-0">
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                <img
                  src={mainBanner}
                  alt="error"
                  style={{ width: "100px", height: "80px" }}
                  
                />
                <h3 className="mb-0 pt-2">
                  Journey <span >Vibes</span>
                </h3>
              </div>
            </div>

           
            <div className="col-12 col-lg-4 mb-3 mb-lg-0">
        <div className="d-flex justify-content-center search-container">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search..."
            style={{ maxWidth: "100%" }}
          />
          <button className="btn btn-dark">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>

           
            <div className="col-12 col-lg-4">
              <div className="d-flex justify-content-center justify-content-lg-end align-items-center">
                <div className="me-3 text-end">
                  <h1 className="h-25 text-uppercase">Welcome {user.name}</h1>
              <span style={{ color: "black" }} className="fw-bold">
                Admin
              </span>
                </div>
                <img
                  src={icon}
                  alt="error"
                  style={{ width: "60px", height: "60px" }}
                  className="rounded-circle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row dashboard">
        <aside className="col-lg-3  main">
          <Link to="">
            <button>Admin Dashboard</button>
          </Link>
          <Link to="addTour">
            <button>Add Tour</button>
          </Link>
          <Link to="viewTours">
            <button>View Tours</button>
          </Link>
          <Link to="addService">
            <button>Add Service</button>
          </Link>
          <Link to="viewServices">
            <button>View Services</button>
          </Link>
          <Link to="addBlog">
            <button>Add Blog</button>
          </Link>
          <Link to="viewBlogs">
            <button>View Blogs</button>
          </Link>
          <Link to="viewUsersignups">
            <button>View Users</button>
          </Link>
           
          
          <Link to="viewEnquiries">
            <button>View Enquiries</button>
          </Link>
          <Link to="viewBookings">
            <button>View Bookings</button>
          </Link>
          <Link to="logout">
            <button onClick={() => setToken("")}>Logout</button>
          </Link>
          
        </aside>
        <div className="col-lg-9 overflow-x-auto"><Outlet/></div>
      </div>
    </div>
  );
};

export default Dashboard;
