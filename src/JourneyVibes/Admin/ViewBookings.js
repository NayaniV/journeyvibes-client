import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [tourName, setTourName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [people, setPeople] = useState("");
  const [_id, setId] = useState("");

  useEffect(() => {
    axios
      .get("https://journeyvibes-server-gtir.onrender.com/bookings")
      .then((res) => setBookings(res.data))
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deleteBooking = (id) => {
    axios
      .delete(`https://journeyvibes-server-gtir.onrender.com/bookings/${id}`)
      .then(() => {
        alert("Booking Deleted");
       
      })
      .catch((err) => console.log(err));
  };

  const getBooking = (id) => {
    axios
      .get(`https://journeyvibes-server-gtir.onrender.com/bookings/${id}`)
      .then((res) => {
        const b = res.data;
        setFullName(b.fullName);
        setPhone(b.phone);
        setEmail(b.email);
        setTourName(b.tourName);
        setStartDate(b.startDate);
        setEndDate(b.endDate);
        setPeople(b.people);
        setId(b._id);
      })
      .catch((err) => console.log(err));
  };

  const updateBooking = (e) => {
    e.preventDefault();
    axios
      .put(`https://journeyvibes-server-gtir.onrender.com/bookings/${_id}`, {
        fullName,
        phone,
        email,
        tourName,
        startDate,
        endDate,
        people,
      })
      .then(() => {
        alert("Booking Updated");
        
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container p-5 viewtours">
      <h3 className="text-center mt-5 mb-3">View Bookings</h3>
      <table className="table table-bordered">
        <thead className="text-center">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Tour</th>
            <th>Start</th>
            <th>End</th>
            <th>People</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, i) => (
            <tr key={i}>
              <td>{b.fullName}</td>
              <td>{b.phone}</td>
              <td>{b.email}</td>
              <td>{b.tourName}</td>
              <td>{b.startDate}</td>
              <td>{b.endDate}</td>
              <td>{b.people}</td>
              <td>
                <button
                  className="btn btn-primary me-2 mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#updateBooking"
                  onClick={() => getBooking(b._id)}
                >
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => deleteBooking(b._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      <div className="modal fade" id="updateBooking" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Update Booking</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateBooking}>
                <input
                  type="text"
                  value={fullName}
                  className="form-control mb-3"
                  placeholder="Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  type="tel"
                  value={phone}
                  className="form-control mb-3"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="email"
                  value={email}
                  className="form-control mb-3"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  value={tourName}
                  className="form-control mb-3"
                  placeholder="Tour Name"
                  onChange={(e) => setTourName(e.target.value)}
                />
                <input
                  type="date"
                  value={startDate}
                  className="form-control mb-3"
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                  type="date"
                  value={endDate}
                  className="form-control mb-3"
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <input
                  type="number"
                  value={people}
                  className="form-control mb-3"
                  placeholder="Number of People"
                  min="1"
                  onChange={(e) => setPeople(e.target.value)}
                />
                <button type="submit" className="btn btn-success form-control">
                  Update Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBookings;
