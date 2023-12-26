import './HotelCards.css'
import React from 'react';

const HotelCards = ({image, name,location,stars,ratings}) => {
  return (
    <div className="hotel-card">
      <h2>{name}</h2>
       <img src={image} alt="" />
      <p className="stars">{stars} star</p>
      <p className="location">Location: {location}</p>
      <p className="budget">rating: {ratings}</p>
      <button> Book now 
</button>
    </div>
  );
};

export default HotelCards;