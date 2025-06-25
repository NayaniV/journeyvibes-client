import React, { useEffect, useState } from "react";
import "./Blog.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'

  
const Blog = () => {
 useEffect (()=>{
    Aos.init( {duration:1000});

  },[])


  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(`https://journeyvibes-server-gtir.onrender.com/blogs`)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <section className="">
      <section className="blog_background">
        <div className="container-fluid p-0">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>Blogs</h1>
              <div className="d-flex justify-content-center">
                <h5 className="me-5"><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/">Home</NavLink> </h5>
                <span className=""> Blog</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container  blogs-container   ">
        <h1 className="my-5">Our Blogs</h1>
        <div className="row ">
          {blogs.map((blog, index) => {
            return (
              <div
                key={index}
                className="service-data col-md-6 col-lg-3 col-xl-4 mb-3 "
              >
                <div className="card  bg-transparent w-100 h-100 shadow" data-aos="zoom-in">
                <NavLink to={`/blogDetails/${blog._id}`}>
                  <img
                    src={blog.image}
                    className="container p-2  "
                    alt="error"
                  />
                  </NavLink>

                  <div className="card-body">
                    
                    <h3 className="h-50">{blog.name}</h3>
                    
                    
                    <p>{blog.des}</p>
                    <div className="d-flex">
                      <p className="justify-content-start col-6 fs-6 fw-bolder"><i className="bi bi-calendar"></i> {blog.date}</p>
                      <span className="text-end col-6 fs-6 fw-bolder"><i className="bi bi-person-fill"></i> {blog.user}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Blog;
