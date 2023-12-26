import "./About.css";
import logo1 from "../assets/logo1.png";
import Pic1 from '../assets/Pic1.jpg'
import React, { useEffect, useState } from 'react';
function About(params) {
  const [clientsCount, setClientsCount] = useState(0);
  const [sitesCount, setSitesCount] = useState(0);
  const [guidesCount, setGuidesCount] = useState(0);
  const [hotelCount,setHotelCount]=useState(0)

  useEffect(() => {
    const intervalClients = setInterval(() => {
      setClientsCount((prevCount) => prevCount + 1);
    }, 50);

    const intervalHotel=setInterval(()=>{
      if(hotelCount>=24){
        clearInterval(intervalHotel);
      }else{
        setHotelCount((prevCount)=>prevCount +1)
      }
    },50);

    const intervalSites = setInterval(() => {
      if (sitesCount >= 20) {
        clearInterval(intervalSites);
      } else {
        setSitesCount((prevCount) => prevCount + 1);
      }
    }, 50);

    const intervalGuides = setInterval(() => {
      if (guidesCount >= 150) {
        clearInterval(intervalGuides);
      } else {
        setGuidesCount((prevCount) => prevCount + 1);
      }
    }, 50);

    return () => {
      clearInterval(intervalClients);
      clearInterval(intervalSites);
      clearInterval(intervalGuides);
      clearInterval(intervalHotel)
    };
  }, [sitesCount, guidesCount]);

  return (
    <>
      <div className="about">
        <div className="head">
          <h1>
            Connecting you around <span>kenya</span>.
          </h1>
        </div>
        <div className="content1">
            <div>
                <h2>About <span>us</span></h2>
          <p>
            Welcome to Tugende, your gateway to unforgettable travel
            experiences! We are passionate about connecting curious travelers
            with knowledgeable and friendly tour guides who are eager to
            showcase the beauty and culture of their local destinations.
          </p>
          </div>
          <div>
          <img src={logo1} alt="" />
          </div>
        </div>
      </div>
      <div className="about2">
      <div className="pic">
          <img src={Pic1} alt="" />
        </div>
        <div className="pic2">
           <center><h1>Our Mission</h1></center> 
          <p>
            At Tugende, our mission is to make your travels not just
            memorable, but transformative. We believe that the heart of any
            great travel experience lies in the connection between travelers and
            local experts. Our platform is designed to create meaningful
            connections that enhance your journey and leave you with a deeper
            understanding of the places you visit.
          </p>
        </div>
        
      </div>
      <div className="card-container">
      <div className="card">
        <h2>Clients</h2>
        <p>{clientsCount}+</p>
      </div>
      <div className="card blue">
        <h2>Sites</h2>
        <p>{sitesCount <= 20 ? sitesCount : '20+'}+</p>
      </div>
      <div className="card blue">
        <h2>Guides</h2>
        <p>{guidesCount <= 150 ? guidesCount : '150+'}+</p>
      </div>
      <div className="card">
        <h2>Hotels</h2>
        <p>{hotelCount <= 24 ? hotelCount : '24+'}+</p>
      </div>
    </div>

    </>
  );
}
export default About;
