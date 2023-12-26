import Data from "../Data";
import Sitecard from "../components/Sitecard";
import './Site.css'

function Sites() {
  return (
    <>
     <center><input type="text" name="text" placeholder="Search 'sites'" className="input" /></center> 
      <div className="site-card-container">
        {Data.map((site, index) => (
          <Sitecard key={index} {...site} />
        ))}
      </div>
    </>
  );
}
export default Sites;
