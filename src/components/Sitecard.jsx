 import './Sitecard.css'
 
 
 const Sitecard=({name,image,location,description,estimatedBudget})=>{
    return(
        <>
        <div className="site-card">
            <h2>{name}</h2>
            <img src={image} alt="" />
            <p>{location}</p>
            <p>{description}</p>
            <p>{estimatedBudget}</p>
        </div>


        </>
    )
    
}
export default Sitecard;