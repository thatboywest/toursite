import About from "../components/About"
import Footer from "../components/Footer"
import './Home.css'

function Home() {
    
    return(
        <>
          <div className="con_tainer">
          <About/>
          <div className="futer">
          
          <Footer/>
          </div>
          </div>
        </>
    )
}
export default Home