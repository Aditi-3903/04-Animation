import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import Projects from "./Pages/Projects";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";


const App = () => {

 

  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <FullScreenNav />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agence" element={<Agence />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path='*' element={<Contact />}/>
        <Route path='*' element={<Blogs/>}/>
      </Routes>
    </div>
  );
};

export default App;
