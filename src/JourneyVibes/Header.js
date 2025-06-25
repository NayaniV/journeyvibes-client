import React, { useContext, useEffect, useState } from "react";
import mainBanner from "./assets/logo.png";
import users from "./assets/user.png";
import { NavLink } from "react-router-dom";
import { loginStatus } from "../App";
import axios from "axios";

const Header = () => {
  const [token, setToken] = useContext(loginStatus);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (token) {
      axios
        .get("https://journeyvibes-server-gtir.onrender.com/", {
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
    } else {
      setUser({});
    }
  }, [token]);

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    setUser({});
  };

  return (
    <header className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid px-2">
          <NavLink className="navbar-brand d-flex" to="/">
            <img src={mainBanner} alt="logo" />
            <h3 className="pt-3">
              Journey <span>Vibes</span>
            </h3>
          </NavLink>

          <div
            className="sidebar offcanvas offcanvas-end text-center"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Journey <span>Vibes</span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/tours">
                    Tours
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/gallery">
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>

              <div className="nav-item dropdown text-center ">
                {token && user.username ? (
                  <div className="nav-link icon">
                    <img src={users} className="me-2" alt="error" />
                    {user.username}
                    <button
                      onClick={handleLogout}
                      className="btn btn-sm btn-outline-danger ms-2"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <NavLink className="nav-link icon" to="/userlogin">
                    <img src={users} className="mx-5" alt="error" />
                  
                  </NavLink>
                )}
              </div>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
