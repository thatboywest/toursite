import HotelCards from "../components/HotelCards";
import kenyaHotels from "../Hdata";
import './Hotels.css';

function Hotels(params) {
  return (
  <>
   <div>
  <center><input type="text" name="text" placeholder="Search 'hotels'" className="input" /></center> 
      <div className="hotel-card-container">
        {kenyaHotels.map((hotel, index) => (
          <HotelCards key={index} {...hotel} />
        ))}
      </div>
    </div>
  
  </>
  );
  
}
export default Hotels;