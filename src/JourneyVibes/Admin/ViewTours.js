import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Admin.css";

const ViewTours = () => {
  const [tours, setTours] = useState([]);
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
  const [_id, setId] = useState("");
  useEffect(() => {
    axios
      .get(`https://journeyvibes-server-gtir.onrender.com/tours`)

      .then((res) => setTours(res.data))
      .catch((err) => console.log(err));
  });
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const deleteTours = (toursId) => {
    axios
      .delete(`https://journeyvibes-server-gtir.onrender.com/tours/${toursId}`)
      .then(() => alert("Your Selected Tour was Deleted"))
      .catch((err) => console.log(err));
  };
  const getOneRecord = (toursId) => {
    axios
      .get(`https://journeyvibes-server-gtir.onrender.com/tours/${toursId}`)
      .then((res) => {
        setImage(res.data.image);
        setImage1(res.data.image1);
        setImage2(res.data.image2);
        setImage3(res.data.image3);
        setImage4(res.data.image4);
        setDestination(res.data.destination);
        setRating(res.data.rating);
        setTourname(res.data.tourname);
        setCategory(res.data.category);
        setType(res.data.type);
        setRate(res.data.rate);
        setInclusions(res.data.inclusions);
        setExclusions(res.data.exclusions);
        setHighlights(res.data.highlights);
        setDuration(res.data.duration);
        setDescription(res.data.description);
        setId(res.data._id);
      })
      .catch((err) => console.log(err));
  };
  const updateEnq = (e) => {
    e.preventDefault();
    axios
      .put(`https://journeyvibes-server-gtir.onrender.com/tours/${_id}`, {
        _id,
        image,
        image1,
        image2,image3,image4,
        destination,
        rating,
        tourname,
        category,
        type,
        rate,
        inclusions,
        exclusions,
        highlights,
        duration,
        description,
      })
      .then((res) => alert("Tour Updated"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container   viewtours">
      <h3 className="text-center mb-3 container p-5 mt-3">View Tours</h3>

      <div className="row">
        {tours.map((tours, index) => {
          return (
            <div key={index} className=" mb-3 col-lg-4 ">
              <div className="card h-100 ">
                <img src={tours.image} alt="error" />
                <div className="card-body">
                  <h5>{tours.destination}</h5>
                  <p>
                    <span>Tourname:</span> {tours.tourname}
                  </p>
                  <p>
                    <span>Rating:</span> {tours.rating}
                  </p>
                  <p>
                    <span>Category:</span> {tours.category}
                  </p>

                  <p>
                    <span>Type:</span> {tours.type}
                  </p>
                  <p>
                    <span>Price:</span> {tours.rate}
                  </p>
                  <p>
                    <span>Duration:</span> {tours.duration}
                  </p>
                  <details>
                    <summary><span>Description:</span></summary>
                    <p>{tours.description}</p>
                  </details>
                  <p>
                    <span>Inclusions:</span> {tours.inclusions}
                  </p>
                  <p>
                    <span>Exclusions:</span> {tours.exclusions}
                  </p>
                  <p>
                    <span>Highlights:</span> {tours.highlights}
                  </p>
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <button
                    onClick={() => getOneRecord(tours._id)}
                    data-bs-target="#update"
                    data-bs-toggle="modal"
                    className="btn btn-primary me-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTours(tours._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="modal fade " id="update" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Update Tours</h5>
              <button data-bs-dismiss="modal" className="btn-close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateEnq}>
                <input
                  type="image_url"
                  value={image}
                  className="form-control mb-3"
                  placeholder="Enter Tour Image"
                  onChange={(e) => setImage(e.target.value)}
                />
                <input
                type="image_url1"
                value={image1}
                className="form-control mb-3"
                placeholder="Enter Tour Image1"
                onChange={(e) => setImage1(e.target.value)}
              />
              <input
                type="image_url2"
                value={image2}
                className="form-control mb-3"
                placeholder="Enter Tour Image1"
                onChange={(e) => setImage2(e.target.value)}
              />
              <input
                type="image_url3"
                value={image3}
                className="form-control mb-3"
                placeholder="Enter Tour Image3"
                onChange={(e) => setImage3(e.target.value)}
              />
              <input
                type="image_url4"
                value={image4}
                className="form-control mb-3"
                placeholder="Enter Tour Image4"
                onChange={(e) => setImage4(e.target.value)}
              />
                <input
                  type="destination"
                  value={destination}
                  className="form-control mb-3"
                  placeholder="Enter Tour Destination"
                  onChange={(e) => setDestination(e.target.value)}
                />
                <input
                  type="rating"
                  value={rating}
                  className="form-control mb-3"
                  placeholder="Enter Tour Rating"
                  onChange={(e) => setRating(e.target.value)}
                />
                <input
                  type="tourname"
                  value={tourname}
                  className="form-control mb-3"
                  placeholder="Enter Tour Name"
                  onChange={(e) => setTourname(e.target.value)}
                />
                <input
                  type="category"
                  value={category}
                  className="form-control mb-3"
                  placeholder="Enter Tour Category"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <input
                  type="type"
                  value={type}
                  className="form-control mb-3"
                  placeholder="Enter Tour Type"
                  onChange={(e) => setType(e.target.value)}
                />
                <input
                  type="rate"
                  value={rate}
                  className="form-control mb-3"
                  placeholder="Enter Tour Rate"
                  onChange={(e) => setRate(e.target.value)}
                />
                <input
                  type="duration"
                  value={duration}
                  className="form-control mb-3 "
                  placeholder="Enter Tour Duration"
                  onChange={(e) => setDuration(e.target.value)}
                />
                <input
                  type="description"
                  value={description}
                  className="form-control mb-3 "
                  placeholder="Enter Tour Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type="inclusions"
                  value={inclusions}
                  className="form-control mb-3"
                  placeholder="Enter Tour inclusions"
                  onChange={(e) => setInclusions(e.target.value)}
                />
                <input
                  type="exclusions"
                  value={exclusions}
                  className="form-control mb-3"
                  placeholder="Enter Tour Exclusions"
                  onChange={(e) => setExclusions(e.target.value)}
                />
                <input
                  type="highlights"
                  value={highlights}
                  className="form-control mb-3 "
                  placeholder="Enter Tour Highlights"
                  onChange={(e) => setHighlights(e.target.value)}
                />
                <button type="submit" className="form-control btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTours;
