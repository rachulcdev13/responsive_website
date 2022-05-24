import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import web from "./img5.png";
// import { NavLink } from "react-router-dom";
// import Footer from "./Footer";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common 
                 name='Grow Your technical Knowledge'
                 visits='/Conatct'
                 imgsrc={web}
                 btname="Get Started"
                 Samat="Mr.Samat"
            />
        </>
    )
}
export default Home;