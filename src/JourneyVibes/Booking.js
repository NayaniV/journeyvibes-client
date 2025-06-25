import axios from "axios";
import React, { useState } from "react";

const Booking = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [tourName, setTourName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [people, setPeople] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");
    const tourError = document.getElementById("tourError");
    const startError = document.getElementById("startError");
    const endError = document.getElementById("endError");
    const peopleError = document.getElementById("peopleError");

    const alphaExp = /^[a-zA-Z ]+$/;
    const mailExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const numExp = /^[0-9]+$/;

    let isValid = true;

    if (fullName === "") {
      nameError.textContent = "*Full Name is required";
      isValid = false;
    } else if (!alphaExp.test(fullName)) {
      nameError.textContent = "*Only alphabets allowed";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    if (phone === "") {
      phoneError.textContent = "*Phone Number is required";
      isValid = false;
    } else if (!numExp.test(phone) || phone.length !== 10) {
      phoneError.textContent = "*Enter a valid 10-digit phone number";
      isValid = false;
    } else {
      phoneError.textContent = "";
    }

    if (email === "") {
      emailError.textContent = "*Email is required";
      isValid = false;
    } else if (!mailExp.test(email)) {
      emailError.textContent = "*Enter a valid email address";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    if (tourName === "") {
      tourError.textContent = "*Tour Name is required";
      isValid = false;
    } else {
      tourError.textContent = "";
    }

    if (startDate === "") {
      startError.textContent = "*Start Date is required";
      isValid = false;
    } else {
      startError.textContent = "";
    }

    if (endDate === "") {
      endError.textContent = "*End Date is required";
      isValid = false;
    } else {
      endError.textContent = "";
    }

    if (people === "" ) {
      peopleError.textContent = "*Enter number of people (min 1)";
      isValid = false;
    } else {
      peopleError.textContent = "";
    }

    if (isValid) {
      axios
        .post("https://journeyvibes-server-gtir.onrender.com/bookings", {
          fullName,
          phone,
          email,
          tourName,
          startDate,
          endDate,
          people,
        })
        .then(() => {
          alert("Booking Submitted Successfully!");
          setFullName("");
          setPhone("");
          setEmail("");
          setTourName("");
          setStartDate("");
          setEndDate("");
          setPeople("");
        })
        .catch((err) => {
          console.error(err);
          alert("There was an error submitting your booking.");
        });
    }
  };

  return (
    <div className="container py-5 px-2 booking">
      <h2 className="fs-2 fw-bold text-capitalize mt-5">Book Your Tour</h2>
      <form onSubmit={submitHandler}>
        <div className="form-floating mb-3">
          <input
            type="text"
            value={fullName}
            className="form-control"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
          <label>Full Name</label>
          <span id="nameError" style={{ color: "red" }}></span>
        </div>

        <div className="form-floating mb-3">
          <input
            type="tel"
            value={phone}
            className="form-control"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Phone Number</label>
          <span id="phoneError" style={{ color: "red" }}></span>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            value={email}
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
          <span id="emailError" style={{ color: "red" }}></span>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            value={tourName}
            className="form-control"
            placeholder="Tour Name"
            onChange={(e) => setTourName(e.target.value)}
          />
          <label>Tour Name</label>
          <span id="tourError" style={{ color: "red" }}></span>
        </div>

        <div className="form-floating mb-3">
          <input
            type="date"
            value={startDate}
            className="form-control"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label>Start Date</label>
          <span id="startError" style={{ color: "red" }}></span>
        </div>

        <div className="form-floating mb-3">
          <input
            type="date"
            value={endDate}
            className="form-control"
            onChange={(e) => setEndDate(e.target.value)}
          />
          <label>End Date</label>
          <span id="endError" style={{ color: "red" }}></span>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            value={people}
            className="form-control"
            placeholder="Number of People"
            onChange={(e) => setPeople(e.target.value)}
            min="1"
          />
          <label>Number of People</label>
          <span id="peopleError" style={{ color: "red" }}></span>
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;
