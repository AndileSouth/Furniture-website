import React from 'react';
import "./Gallery.css";


import image1 from "../assets/img/living-room-2732939_1920.jpg";

export const Gallery = () => {
  return (
    <div className='Gallery'>
        <h1>Gallery</h1>
        <div className="gallery-container">

            <div className='img-container'>
                <img src={image1} alt="" />
            </div>
            <div className='img-container'>
                <img src={image1} alt="" />
            </div>
            <div className='img-container'>
                <img src={image1} alt="" />
            </div>
            <div className='img-container'>
                <img src={image1} alt="" />
            </div>
            <div className='img-container'>
                <img src={image1} alt="" />
            </div>
            <div className='img-container'>
                <img src={image1} alt="" />
            </div>
            <div className='img-container'>
                <img src={image1} alt="" />
            </div>
            <div className='img-container'>
                <img src={image1} alt="" />
            </div>
            <div className='img-container'>
                <img src={image1} alt="" />
            </div>
            
        </div>
    </div>
  )
}
