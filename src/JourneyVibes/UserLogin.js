
import React, { useContext, useEffect, useState } from "react";
import loginimage from "./assets/login  poster.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { loginStatus } from "../App";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useContext(loginStatus);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = document.getElementById("emailError");
     const passwordError = document.getElementById("passwordError");
    const passwordExp = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-={}:'"\\|,.<>/?]).{8,}$/;

    const mailExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    let isValid = true;

    // Email validation
    if (email === "") {
      emailError.textContent = "*Email is required";
      isValid = false;
    } else if (!mailExp.test(email)) {
      emailError.textContent = "*Invalid email format";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Password validation
    if (password === "") {
      passwordError.textContent = "*Password is required";
      isValid = false;
    } else if (!password.match(passwordExp)) {
      passwordError.textContent =
        "*Password must be at least 8 characters, include one uppercase letter and one special character";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }

    if (isValid) {
      axios
        .post("https://journeyvibes-server-gtir.onrender.com/userlogin", {
          email,
          password,
        })
        .then((res) => {
         
            alert("Login successful!");
            setEmail("");
            setPassword("");
            setToken(res.data.token);
          
        })
        .catch((err) => {
          alert("Login failed. Please check your credentials.");
          console.error(err);
        });
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/"); 
    }
  }, [token, navigate]);

  return (
    <div className="container p-5">
      <div className="row login-container">
        <div className="container p-4 col-lg-7 text-center main">
          <h1>LogIn</h1>
          <p>
            "Log in to access your bookings, explore new destinations, and start
            your next adventure with us!"
          </p>
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column align-content-center"
          >
            <div className="form-floating mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
              <span id="emailError" style={{ color: "red" }}></span>
            </div>

            <div className="form-floating mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
              <span id="passwordError" style={{ color: "red" }}></span>
            </div>

            <div className="d-flex align-items-center mb-2">
              <input type="checkbox" />
              <p className="mx-2 mb-0">Remember Me</p>
            </div>

            <button className="form-control btn btn-primary mt-2">Login</button>

            <div className="d-flex justify-content-center mt-3">
              Don't Have an Account?
              <NavLink to="/usersignup" className="text-decoration-none">
                <h5 className="fs-5 mx-1 fw-bold text-danger">Sign Up!</h5>
              </NavLink>
            </div>
          </form>
        </div>

        <div className="col-lg-5 container p-3">
          <img src={loginimage} className="w-100 h-100" alt="login" />
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
