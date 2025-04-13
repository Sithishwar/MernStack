import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./connector/Navbar";
import Offer from "./pages/Offer";
import Page1 from "./pages/Page1";
import Aboutus from "./pages/Aboutus";
import Faq from "./pages/Faq";
import TAC from "./pages/TAC";

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Page1/>} />
        <Route path="/About" element={<Aboutus/>} />
        <Route path="/Offer" element={<Offer/>} />
        <Route path="/Faq" element={<Faq/>} />
        <Route path="/TAC" element ={<TAC/>}/>
      </Routes>
    </>
  );
}

export default App;
