import React from 'react'
import destination from "./assets/adventure-tour-india.jpg"
import traveltips from "./assets/traveltips.webp"
import adventure from "./assets/travelblog.png"
import food from "./assets/food.avif"
import eco from "./assets/green.webp"
import family from "./assets/family.webp"

const Posts = () => {
  return (
    <div className="col-lg-5 container p-5 posts-main">
          <h2 className="text-center">Recent Posts</h2>
          <div className="posts container p-3">
            <div className="d-flex mb-3">
              <img src={destination} className='w-50 h-25'  alt="error"/>
              <p className='fs-6 ms-2'>Detailed Destination Guides for Exploring the India's Best Locations</p>
            </div>
            <div className="d-flex mb-3">
              <img src={traveltips} className='w-50 h-25'  alt="error"/>
              <p className='fs-6 ms-2'>Expert Travel Tips & Hacks to Make Your Journey Effortless</p>
            </div>
            <div className="d-flex mb-3">
              <img src={adventure} className='w-50 h-25'  alt="error"/>
              <p className='fs-6 ms-2'>Exciting Adventure Travel Blogs with Tips for Extreme Activities</p>
            </div>
            <div className="d-flex mb-3">
              <img src={food} className='w-50 h-25'  alt="error"/>
              <p className='fs-6 ms-2'>Food and Travel Blogs Exploring Local Cuisine and Dining Experiences</p>
            </div>
            <div className="d-flex mb-3">
              <img src={eco} className='w-50 h-25'  alt="error"/>
              <p className='fs-6 ms-2'>Sustainable Travel Blogs Promoting Eco-Friendly Trips and Green Travel</p>
            </div>
            <div className="d-flex mb-3">
              <img src={family} className='w-50 h-25'  alt="error"/>
              <p className='fs-6 ms-2'>Family Travel Blogs Offering Tips for Traveling with Kids and Families</p>
            </div>

          </div>
        </div>
  )
}

export default Posts