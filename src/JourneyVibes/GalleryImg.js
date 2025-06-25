import React, { useState } from "react";
import "./Gallery.css";
import image1 from "./assets/g1.jpg";
import image2 from "./assets/g2.jpg";
import image3 from "./assets/g3.png";
import image4 from "./assets/g4.webp";
import image5 from "./assets/g5.jpg";
import image6 from "./assets/g6.avif";
import image7 from "./assets/g7.jpg";
import image8 from "./assets/g8.avif";
import image9 from "./assets/g9.webp";
import image10 from "./assets/image10.jpeg";
import image11 from "./assets/image11.jpg";
import image12 from "./assets/image12.jpeg";
import image13 from "./assets/image13.avif";
import image14 from "./assets/image14.jpg";
import image15 from "./assets/image15.png";
import image16 from "./assets/image16.jpg";

const GalleryImg = () => {
  const data = [
    {
      imgSrc:image1,
    },
    {
      imgSrc:image2,
    },
    {
      imgSrc:image3,
    },
    {
      imgSrc:image4,
    },
    {
      imgSrc:image5,
    },
    {
      imgSrc:image6,
    },
    {
      imgSrc:image7,
    },
    {
      imgSrc:image8,
    },
    {
      imgSrc:image9,
    },
    {
      imgSrc:image10,
    },
    {
      imgSrc:image11,
    },
    {
      imgSrc:image12,
    },{
      imgSrc:image13,
    },
    {
      imgSrc:image14,
    },{
      imgSrc:image15,
    },{
      imgSrc:image16,
    }
    
  ]
  const [model,setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

  const getImg = (imgSrc) => {
   // console.warn(imgSrc)
    setTempImgSrc(imgSrc);
    setModel(true);

  }
  const showPrev = () => {
    const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setTempImgSrc(data[newIndex].imgSrc);
  };

  const showNext = () => {
    const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setTempImgSrc(data[newIndex].imgSrc);
  };
  return (
    <>
      
      
        <div className={model? "model open" : "model"}>
          <img src={tempimgSrc} alt="error"/>
          <i className="bi bi-x-square" onClick= {()=> setModel(false)}> </i>
          <span className="prev-btn" onClick={showPrev}><i className="bi bi-caret-left-square"></i></span>
          <span className="next-btn" onClick={showNext}><i className="bi bi-caret-right-square"></i></span>
        </div>
        <div className="gallery  ">
        {data.map((image, index) => {
          return (
            <div key={index} className=" pics " onClick={()=> getImg(image.imgSrc)}>
              
                <img src={image.imgSrc} style={{width:'100%'}} alt="error" />
                
          
            </div>
           
          );
        })}
      </div>
        
     
    </>
  );
};

export default GalleryImg;
