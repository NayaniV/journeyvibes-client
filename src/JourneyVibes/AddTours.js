import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Services.css";

const AddTours = () => {
  const [image, setImage] = useState("");
   const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
     const [image3, setImage3] = useState("");
      const [image4, setImage4] = useState("");
  const [destination, setDestination] = useState("");
  const [rating, setRating] = useState("");
  const [tourname, setTourname] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [rate, setRate] = useState("");
  const [inclusions, setInclusions] = useState("");
  const [exclusions, setExclusions] = useState("");
  const [highlights, setHighlights] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://journeyvibes-server-gtir.onrender.com/tours`, { image,image1,image2,image3,image4, destination,rating,tourname,category,type,rate,inclusions,exclusions,highlights,duration,description})
      .then((res) => {
        alert("You Have Successfully Posted Tour Data");

        setImage("");
        setImage1("");
        setImage2("");
        setImage3("");
        setImage4("");
        setDestination("");
        setRating("");
        setTourname("");
        setCategory("");
        setType("");
        setRate("");
        setInclusions("");
        setExclusions("");
        setHighlights("");
        setDuration("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="container p-5 addservice">
      <h3 className="text-center text-uppercase mb-3">Add Tours</h3>
      <div className="row justify-content-center ">
        <div className="col-md-12 col-lg-12 ">
          <form className="container   col-8" onSubmit={submitHandler}>
            <div className=" form-floating">
              <input
                type="image_url"
                value={image}
                className="form-control mb-3"
                placeholder="Enter Tour Image"
                onChange={(e) => setImage(e.target.value)}
              />
              <label>Enter Tour Image_URL</label>
            </div>
            <div className=" form-floating">
              <input
                type="image_url"
                value={image1}
                className="form-control mb-3"
                placeholder="Enter Tour Image1"
                onChange={(e) => setImage1(e.target.value)}
              />
              <label>Enter Tour Image_URL1</label>
            </div>
            <div className=" form-floating">
              <input
                type="image_url"
                value={image2}
                className="form-control mb-3"
                placeholder="Enter Tour Image2"
                onChange={(e) => setImage2(e.target.value)}
              />
              <label>Enter Tour Image_URL2</label>
            </div>
            <div className=" form-floating">
              <input
                type="image_url"
                value={image3}
                className="form-control mb-3"
                placeholder="Enter Tour Image3"
                onChange={(e) => setImage3(e.target.value)}
              />
              <label>Enter Tour Image_URL3</label>
            </div>
            <div className=" form-floating">
              <input
                type="image_url"
                value={image4}
                className="form-control mb-3"
                placeholder="Enter Tour Image4"
                onChange={(e) => setImage4(e.target.value)}
              />
              <label>Enter Tour Image_URL4</label>
            </div>
            

            

            <div className=" form-floating">
              <input
                type="destination"
                value={destination}
                className="form-control mb-3"
                placeholder="Enter Tour Destination"
                onChange={(e) => setDestination(e.target.value)}
              />
              <label>Enter Tour Destination</label>
            </div>
            <div className=" form-floating">
              <input
                type="rating"
                value={rating}
                className="form-control mb-3"
                placeholder="Enter Tour Rating"
                onChange={(e) => setRating(e.target.value)}
              />
              <label>Enter Tour Rating</label>
            </div>
            <div className=" form-floating">
              <input
                type="tourname"
                value={tourname}
                className="form-control mb-3"
                placeholder="Enter Tour Name"
                onChange={(e) => setTourname(e.target.value)}
              />
              <label>Enter Tour Name</label>
            </div>
            <div className=" form-floating">
              <input
                type="category"
                value={category}
                className="form-control mb-3"
                placeholder="Enter Tour Category"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label>Enter Tour Category</label>
            </div>
            <div className=" form-floating">
              <input
                type="type"
                value={type}
                className="form-control mb-3"
                placeholder="Enter Tour Type"
                onChange={(e) => setType(e.target.value)}
              />
              <label>Enter Tour Type</label>
            </div>
            <div className=" form-floating">
              <input
                type="rate"
                value={rate}
                className="form-control mb-3"
                placeholder="Enter Tour Rate"
                onChange={(e) => setRate(e.target.value)}
              />
              <label>Enter Tour Rate</label>
            </div>
            <div className=" form-floating">
              <input
                type="inclusions"
                value={inclusions}
                className="form-control mb-3"
                placeholder="Enter Tour inclusions"
                onChange={(e) => setInclusions(e.target.value)}
              />
              <label>Enter Tour Inclusions</label>
            </div>
            <div className=" form-floating">
              <input
                type="exclusions"
                value={exclusions}
                className="form-control mb-3"
                placeholder="Enter Tour Exclusions"
                onChange={(e) => setExclusions(e.target.value)}
              />
              <label>Enter Tour Exclusions</label>
            </div>
            <div className=" form-floating">
              <input
                type="highlights"
                value={highlights}
                className="form-control mb-3 "
                placeholder="Enter Tour Highlights"
                onChange={(e) => setHighlights(e.target.value)}
              />
              <label>Enter Tour Highlights</label>
            </div>
            <div className=" form-floating">
              <input
                type="duration"
                value={duration}
                className="form-control mb-3 "
                placeholder="Enter Tour Duration"
                onChange={(e) => setDuration(e.target.value)}
              />
              <label>Enter Tour Duration</label>
            </div>
            <div className=" form-floating">
              <input
                type="description"
                value={description}
                className="form-control mb-3 "
                placeholder="Enter Tour Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <label>Enter Tour Description</label>
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

export default AddTours;
