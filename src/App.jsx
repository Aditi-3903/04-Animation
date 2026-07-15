import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import Projects from "./Pages/Projects";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";
import Contact from "./Pages/Contact";

const App = () => {

  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <FullScreenNav />
    <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/Agence" element={<Agence />} />
       <Route path="/Projects" element = {<Projects />}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='*' element={<Contact/>}/>
      </Routes>
    </div>
  );
};

export default App;

