import React from 'react'
import money from "./assets/money.avif"
import tourists from "./assets/tourists.png"
import hotel from "./assets/building.jpg"
import ground from "./assets/ground.jpg"
import customer from "./assets/customer.png"
import discount from "./assets/discount.jpg"
import CountUp from 'react-countup'



const Choosing = () => {
  return (
    <div className='container p-5 bg-white choosing_elementer'>
         <h1 className='text-center'>why choose us?</h1>
        <div className='row  text-center'>
            <div className='col-md-6 col-lg-4 col-xl-2 sub'>
                <img src={money} className='w-50 h-50' alt='error'/>
                <h3><CountUp start={0} end={100} duration={100} delay={1}/>%</h3>
                <h5>Money Safe</h5>
            </div>
            <div className='col-md-6 col-lg-4 col-xl-2 sub'>
                <img src={tourists} className='w-50 h-50' alt='error'/>
                <h3><CountUp start={0} end={500} duration={100} delay={1}/>+</h3>
                <h5>Happy Tourists</h5>
            </div>
            <div className='col-md-6 col-lg-4 col-xl-2 sub'>
                <img src={hotel} className='w-50 h-50' alt='error'/>
                <h3><CountUp start={0} end={100} duration={100} delay={1}/>+</h3>
                <h5>Hotel & Transport</h5>
            </div>
            <div className='col-md-6 col-lg-4 col-xl-2 sub'>
                <img src={ground} className='w-50 h-50' alt='error'/>
                <h3><CountUp start={0} end={21} duration={100} delay={1}/>+</h3>
                <h5>Ground Experts</h5>
            </div>
            <div className='col-md-6 col-lg-4 col-xl-2 sub'>
                <img src={customer} className='w-50 h-50' alt='error'/>
                <h3>24 x 7</h3>
                <h5>Customer Support</h5>
            </div>
            <div className='col-md-6 col-lg-4 col-xl-2 sub'>
                <img src={discount} className='w-50 h-50' alt='error'/>
                <h3>Discounted</h3>
                <h5>Best Deals</h5>
            </div>
        </div>
       
    </div>
  )
}

export default Choosing