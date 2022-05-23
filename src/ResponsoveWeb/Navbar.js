import React from "react";
import {  NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
import "../index.css";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid"> 
                            <NavLink className="navbar-brand " to="">Mr.Samat</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item"> 
                                            <NavLink activeClassName="active" className="nav-link " to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item"> 
                                            <NavLink  activeClassName="active" className="nav-link " to="/About">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  activeClassName="active" className="nav-link " to="/Services">Services</NavLink> 
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  activeClassName="active" className="nav-link " to="Contact">ConatctUs</NavLink> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div> 
            </div>
        </>
    )
}
export default Navbar;