import React, { useEffect, useState } from "react";
import "./Tours.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Tours = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);

  

  // Filters state
  const [filters, setFilters] = useState({
    destination: [],
    category: [],
    type: [],
    priceRanges: [],
    sort: "",
  });

  // Fetch tours once on mount
  useEffect(() => {
    axios
      .get(`https://journeyvibes-server-gtir.onrender.com/tours`)
      .then((res) => {
        setTours(res.data);
        setFilteredTours(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Function to get unique values for a filter key from tours data
  const getUnique = (key) => {
    const values = tours.map((item) => item[key]); // get all values for key
    const uniqueValues = [...new Set(values)]; // remove duplicates
    return uniqueValues.filter(Boolean); // remove empty values
  };

  // Get unique filter lists dynamically
  const destinations = getUnique("destination");
  const categories = getUnique("category");
  const types = getUnique("type");

  // Helper to parse price string like "₹1,234" to number 1234
  const parsePrice = (price) => {
    if (!price || typeof price !== "string") return 0;
    return parseFloat(price.replace(/[\u20B9,]/g, ""));
  };

  // Filter tours whenever filters or tours data change
  useEffect(() => {
    let filtered = tours.filter((item) => {
      const matchDestination =
        filters.destination.length === 0 ||
        filters.destination.includes(item.destination);
      const matchCategory =
        filters.category.length === 0 ||
        filters.category.includes(item.category);
      const matchType =
        filters.type.length === 0 || filters.type.includes(item.type);
      const matchMin =
        !filters.priceMin ||
        parsePrice(item.rate) >= parseFloat(filters.priceMin);
      const matchMax =
        !filters.priceMax ||
        parsePrice(item.rate) <= parseFloat(filters.priceMax);

      return (
        matchDestination && matchCategory && matchType && matchMin && matchMax
      );
    });

    if (filters.sort === "lowToHigh") {
      filtered.sort((a, b) => parsePrice(a.rate) - parsePrice(b.rate));
    } else if (filters.sort === "highToLow") {
      filtered.sort((a, b) => parsePrice(b.rate) - parsePrice(a.rate));
    }

    setFilteredTours(filtered);
  }, [filters, tours]);

  // Checkbox change handler
  const handleCheckboxChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;

    let updatedValues = filters[name];

    if (checked) {
      updatedValues = [...updatedValues, value];
    } else {
      updatedValues = updatedValues.filter((item) => item !== value);
    }

    setFilters({
      ...filters,
      [name]: updatedValues,
    });
  };

  // Input change handler for price and sort
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section>
      <section className="tours_background">
        <div className="container-fluid p-0">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>Tours</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/">Home</NavLink> </h5>
                <span className=""> Tour</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container p-5 tours-container">
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i className="bi bi-funnel"></i> Filter
          </button>
          <div className="filter-group">
            <select
              name="sort"
              value={filters.sort}
              onChange={handleInputChange}
              className="p-2"
            >
              <option value="">Select Sort Order</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header overflow-hidden">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Filter
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="accordion" id="accordionExample">
              {/* Destination */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Destination
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordinonExample"
                >
                  <div className="accordion-body">
                    <div className="filter-group">
                      {destinations.map((destination) => (
                        <div key={destination}>
                          <input
                            type="checkbox"
                            name="destination"
                            value={destination}
                            onChange={handleCheckboxChange}
                            checked={filters.destination.includes(destination)}
                          />
                          <label className="ms-2">{destination}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Category */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Category
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="filter-group">
                      {categories.map((category) => (
                        <div key={category}>
                          <input
                            type="checkbox"
                            name="category"
                            value={category}
                            onChange={handleCheckboxChange}
                            checked={filters.category.includes(category)}
                          />
                          <label className="ms-2">{category}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tour Type */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Tour Type
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="filter-group">
                      {types.map((type) => (
                        <div key={type}>
                          <input
                            type="checkbox"
                            name="type"
                            value={type}
                            onChange={handleCheckboxChange}
                            checked={filters.type.includes(type)}
                          />
                          <label className="ms-2">{type}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Range */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsePrice"
                    aria-expanded="false"
                    aria-controls="collapsePrice"
                  >
                    Price Range
                  </button>
                </h2>
                <div
                  id="collapsePrice"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="filter-group">
                      <div className="d-flex">
                        <input
                          type="number"
                          name="priceMin"
                          value={filters.priceMin}
                          onChange={handleInputChange}
                          placeholder="Min Price"
                          className="me-2 form-control"
                        />
                        <input
                          type="number"
                          name="priceMax"
                          value={filters.priceMax}
                          onChange={handleInputChange}
                          placeholder="Max Price"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clear All Filters Button OUTSIDE the accordion */}
            <div className="mt-3 d-grid">
              <button
                className="btn btn-secondary"
                onClick={() =>
                  setFilters({
                    destination: [],
                    category: [],
                    type: [],
                    priceMin: "",
                    priceMax: "",
                    sort: "",
                  })
                }
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>

        {/* Show filtered tours */}
        <h1 className="mt-4">Our Tours</h1>
        <div className="row">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour, index) => {
              return(

              
              <div
                key={index}
                className="tour-data col-md-6 col-lg-4 col-xl-4 mb-3"
              >
                <div
                  className="card bg-light w-100 h-100 shadow"
                  data-aos="fade-down-right"
                >
                  <div className="image">
                    <img
                      src={tour.image}
                      className="container p-2"
                      alt="error"
                    />
                  </div>

                  <div className="card-body">
                    <h2 className="text-center">
                      <i className="bi bi-geo-alt-fill"></i> {tour.destination}
                    </h2>
                    <div className="d-flex justify-content-between mt-3">
                      <span className="justify-content-start">
                        {tour.rating}
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "#FF9800" }}
                        ></i>
                      </span>
                      <span className="justify-content-end">
                        {tour.duration}
                      </span>
                    </div>
                    <div className="line my-3"></div>
                    <h3>{tour.tourname}</h3>
                    <div className="d-flex justify-content-around my-3">
                      <span
                        style={{
                          backgroundColor: "rgb(228, 193, 211)",
                          color: "rgb(207, 56, 129)",
                          borderRadius: "25px",
                        }}
                        className="p-2"
                      >
                        {tour.category}
                      </span>
                      <span
                        style={{
                          backgroundColor: "#4ba7fc",
                          color: "#FFFF",
                          borderRadius: "25px",
                        }}
                        className="p-2"
                      >
                        {tour.type}
                      </span>
                    </div>
                    <div className="line my-3"></div>
                    <h5 className="text-center">
                      <i className="bi bi-currency-rupee"></i>
                      {tour.rate}
                    </h5>
                    <div className="d-flex justify-content-center">
                      <NavLink to={`/tourDetails/${tour._id}`}>
                        <button className="mt-3">Know More</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              )
            }
            )
          ) : (
            <div className="text-center mt-5">
              <h4 className="mt-3 fs-2 fw-bold">No Matching Items Found</h4>
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Tours;
