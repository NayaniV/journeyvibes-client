import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { createContext, useState } from 'react'

import "./JourneyVibes/Style.css"
import Header from "./JourneyVibes/Header"
import Footer from "./JourneyVibes/Footer"
import Routing from "./JourneyVibes/Routing"
import "animate.css"
import Hide from "./JourneyVibes/Hide";

export const loginStatus = createContext()


const App = () => {
const [token, setToken] = useState(localStorage.getItem("token") || "");  

  return (
    <div className="App">
      <loginStatus.Provider value={[token,setToken]}>
      
       <Hide><Header/></Hide> 
       
  
     <Routing/>
     
     <Footer/>
   
    
      </loginStatus.Provider>
     
    
    </div>
  )
}

export default App