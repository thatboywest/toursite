import './GuideCard.css'

const GuidesCard =({ image ,name, phoneNumber,vehicleType,experience,ratings})=>{

    return(
        <>
        <div className="guide-card">

            <h2>{name}</h2>
            <img src={image} alt="" />
            <p >{phoneNumber}</p>
            <p>{vehicleType}</p>
            <p>{experience}</p>
            <p>{ratings}</p>
            <button> Book now 
</button>
        </div>
        </>
    )
}
export default GuidesCard;