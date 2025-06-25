import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Services.css";

const AddServices = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://journeyvibes-server-gtir.onrender.com/services`, { image, name, description })
      .then((res) => {
        alert("You Have Successfully Posted Service Data");

        setImage("");
        setName("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="container p-5 addservice">
      <h3 className="text-center text-uppercase mb-3">Add Services</h3>
      <div className="row justify-content-center ">
        <div className="col-md-12 col-lg-12 ">
          <form className="container   col-8" onSubmit={submitHandler}>
            <div className=" form-floating">
              <input
                type="image_url"
                value={image}
                className="form-control mb-3"
                placeholder="Enter Service Image"
                onChange={(e) => setImage(e.target.value)}
              />
              <label>Enter Service Image_URL</label>
            </div>
            <div className=" form-floating">
              <input
                type="name"
                value={name}
                className="form-control mb-3 "
                placeholder="Enter Service Name"
                onChange={(e) => setName(e.target.value)}
              />
              <label>Enter Service Name</label>
            </div>
            <div className=" form-floating">
              <input
                type="description"
                value={description}
                className="form-control mb-3 "
                placeholder="Enter Service Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <label>Enter Service Description</label>
            </div>
            <button type="submit" className="form-control fw-bold btn btn-primary text-uppercase">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
