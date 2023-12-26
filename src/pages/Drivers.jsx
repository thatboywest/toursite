import Guides from '../Guides'
import GuidesCard from '../components/GuidesCard'
import './Drivers.css'

function Drivers() {
    
    return(
        <>

    <div className="guide-card-container">
        {Guides.map((guide,index)=>(
            <GuidesCard key={index}{...guide}/>
        ))}
    </div>
        </>
    )
}
export default Drivers