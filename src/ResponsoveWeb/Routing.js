import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import NotFound from "./NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';




const Routing = () => {
    return(
        <>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/Services" element={<Services />}></Route>
            <Route exact path="/Contact" element={<Contact />}></Route>
            <Route exact path="*" element={<NotFound />}></Route>
        </Routes>
        </>
    )
}
export default Routing;