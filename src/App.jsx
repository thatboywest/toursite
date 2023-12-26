import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sites from './pages/Sites';
import Drivers from './pages/Drivers';
import Hotels from "./pages/Hotels";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
         
        <Route path="/" element={<Home></Home>} />
        <Route path="/Drivers" element={<Drivers/>} />
        <Route path="/Sites" element={<Sites/>} />
        <Route path="/Hotels" element={<Hotels/>} />
        




        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
