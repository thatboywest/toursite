import './Navbar.css'
import { Link } from "react-router-dom";
import Logo1 from '../assets/logo1.png'
function Navbar() {
    return(
      <>
     <div class="navbar">
  <div class="nav1">
    <img src={Logo1} alt="" />
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/Sites'>Sites</Link></li>
        <li><Link to='/Hotels'>Hotels</Link></li>
        <li><Link to='/Drivers'>Guides</Link></li>
        
       
      </ul>
    </nav>
  </div>
  <div class="nav2">
    <ul>
      <li>Log In</li>
      <li>Log Out</li>
    </ul>
  </div>
</div>


      </>
    )
    
}
export default Navbar