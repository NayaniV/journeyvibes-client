import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Posts from "./Posts";
import Aos from "aos";
import "aos/dist/aos.css";

const BlogDetails = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const { id } = useParams();
  const [blog, setBlog] = useState("");
  useEffect(() => {
    axios
      .get(`https://journeyvibes-server-gtir.onrender.com/blogs/${id}`)
      .then((res) => setBlog(res.data));
  });
  return (
    <section className="">
      <section className="blog_background">
        <div className="container-fluid p-0">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>BlogDetails</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/blog">Blog</NavLink> </h5>
                <span className=""> BlogDetails</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container p-5 blog_details">
        <div className="row">
          <div className="col-lg-7 ">
            <img src={blog.image} className="w-100" alt="error" />
            <div className="d-flex">
              <p className="justify-content-start col-6 fs-6 fw-bolder mt-2" data-aos="fade-down">
                <i class="bi bi-calendar"></i> {blog.date}
              </p>
              <span className="text-end col-6 fs-6 fw-bolder mt-2" data-aos="fade-down">
                <i class="bi bi-person-fill"></i> {blog.user}
              </span>
            </div>
         
              <h3 data-aos="fade-down">{blog.name}</h3>
        
              <h5 data-aos="fade-up">{blog.des}</h5>
         
            
              <p data-aos="fade-down">{blog.description}</p>
           
          </div>
          <Posts />
        </div>
      </section>
    </section>
  );
};

export default BlogDetails;
