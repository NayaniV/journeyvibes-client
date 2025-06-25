import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Tours from "./Tours";
import Services from "./Services";
import Gallery from "./Gallery";
import Blog from "./Blog";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Login from "./Admin/Login";
import Dashboard from "./Admin/Dashboard";
import UserLogin from "./UserLogin";
import UserSignup from "./UserSignup";
import BlogDetails from "./BlogDetails";
import TourDetails from "./TourDetails";

import Welcome from "./Admin/Welcome";
import AddTours from "./AddTours";
import ViewTours from "./Admin/ViewTours";
import AddServices from "./AddServices";
import ViewServices from "./Admin/ViewServices";
import ViewEnquiries from "./Admin/ViewEnquiries";
import AddBlog from "./AddBlog";
import ViewBlog from "./Admin/ViewBlog";
import ViewUserSignup from "./Admin/ViewUsersignup";
import ViewBookings from "./Admin/ViewBookings";





const Routing = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/tours" Component={Tours} />
      <Route path="/services" Component={Services} />
      <Route path="/gallery" Component={Gallery} />
      <Route path="/blog" Component={Blog} />
      <Route path="/contact" Component={Contact} />
      <Route path="*" Component={NoPage} />
      <Route path="/admin" Component={Login} />
      <Route path="/dashboard" Component={Dashboard}>
        <Route path="" Component={Welcome} />
        <Route path="addTour" Component={AddTours} />
        <Route path="viewTours" Component={ViewTours} />
        <Route path="addservice" Component={AddServices} />

        <Route path="viewServices" Component={ViewServices} />
        <Route path="addBlog" Component={AddBlog} />

        <Route path="viewBlogs" Component={ViewBlog} />
         <Route path="viewBookings" Component={ViewBookings} />

        <Route path="viewEnquiries" Component={ViewEnquiries} />
        <Route path="viewUsersignups" Component={ViewUserSignup} />
     
        <Route path="logout" Component={Login} />
      </Route>
      <Route path="/userlogin" Component={UserLogin} />
      <Route path="/usersignup" Component={UserSignup} />
      <Route path="/blogDetails/:id" Component={BlogDetails} />
      <Route path="/tourDetails/:id" Component={TourDetails} />
    </Routes>
  );
};

export default Routing;
