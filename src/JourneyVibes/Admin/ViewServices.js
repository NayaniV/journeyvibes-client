import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Admin.css"

const ViewServices = () => {
  const [services, setServices] = useState([]);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [_id, setId] = useState("");
  useEffect(() => {
    axios
      .get(`https://journeyvibes-server-gtir.onrender.com/services`)

      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  });
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const deleteServices = (servicesId) => {
    axios
      .delete(`https://journeyvibes-server-gtir.onrender.com/services/${servicesId}`)
      .then(() => alert("Your Selected Service was Deleted"))
      .catch((err) => console.log(err));
  };
  const getOneRecord = (servicesId) => {
    axios.get(`https://journeyvibes-server-gtir.onrender.com/services/${servicesId}`).then((res) => {
      setImage(res.data.image);
      setName(res.data.name)
      setDescription(res.data.description)
      setId(res.data._id)
    })
    .catch((err)=>console.log(err))
  };
  const updateEnq =(e)=>{
    e.preventDefault()
    axios.put(`https://journeyvibes-server-gtir.onrender.com/services/${_id}`,{_id,image,name,description})
    .then((res)=>alert("Service Updated"))
    .catch((err)=>console.log(err))
  }
  return (
    <div className="container   viewservice">
      <h3 className="text-center mb-3 container p-5 mt-3">View Services</h3>
      <table className=" table table-bordered ">
        <thead>
          <tr className="text-center">
            <th className="w-25">Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((services, index) => {
            return (
              <tr key={index}>
                <td><img src={services.image} className="w-100 h-100 "  alt="error"/></td>
                <td>{services.name}</td>
                <td>{services.description}</td>
                <td>
                
                  <button onClick={() => getOneRecord(services._id)} data-bs-target="#update" data-bs-toggle="modal" className="btn btn-primary me-3"  >Edit</button>
                  <button
                    onClick={() => deleteServices(services._id)}
                    className="btn btn-danger mt-3"
                  >
                    Delete
                  </button>
                
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="modal fade " id="update" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Update Services</h5>
              <button data-bs-dismiss="modal" className="btn-close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateEnq}>
              <input type="image_url" value={image} className="form-control mb-3" placeholder="Enter Service Image" onChange={(e)=>setImage(e.target.value)}/>
                <input type="name" value={name}className="form-control mb-3" placeholder="Enter Service Name" onChange={(e)=>setName(e.target.value)}/>
                <input type="description" value={description}className="form-control mb-3" placeholder="Enter Service Description" onChange={(e)=>setDescription(e.target.value)}/>
                <button type="submit" className="form-control btn btn-primary" >Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewServices;
