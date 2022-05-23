import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import web from "./img5.png";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1" style={{ marginTop: "110px", padding: "30px" }}>
                                    <h1>Grow Your Knowledge<strong className="brandname">React JS With <span style={{ color: "purple" }}>MR.SAMAT</span></strong></h1>
                                    <h2 className="my-3">We are the team of talented developer and making websites </h2>
                                    <div className="mt-3">
                                        <NavLink to="/" className="btn-get-started"><button type="button" class="btn btn-primary">
                                            Get Started</button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img" style={{ marginTop: "50px" }}>
                                    <img src={web} className="img-fluid animated" alt="homeImage" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;