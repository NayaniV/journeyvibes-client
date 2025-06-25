import  { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Hide = ({ children }) => {
  const locate = useLocation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (
      locate.pathname === "/dashboard/addTour" ||
      locate.pathname === "/dashboard/addService" ||
      locate.pathname === "/dashboard/addBlog" ||
      locate.pathname === "/dashboard/viewTours" ||
      locate.pathname === "/dashboard/viewServices" ||
      locate.pathname === "/dashboard/viewBlogs" ||
      locate.pathname === "/dashboard/viewBookings" ||
      locate.pathname === "/dashboard/viewUsersignups" ||
      locate.pathname === "/dashboard/viewEnquiries" ||
      locate.pathname === "/dashboard"
    ) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [locate.pathname]);

  return show ? children : null;
};

export default Hide;
