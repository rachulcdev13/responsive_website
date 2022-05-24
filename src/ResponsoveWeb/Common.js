import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'; 
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                    <h1>{props.name}<strong className="brandname"> React JS With <span style={{ color: "purple" }}> {props.Samat}</span></strong></h1>
                                    <h2 className="my-3" style={{lineHeight:"1.5",letterSpacing:"2px"}}>JetBlue's header creates a sense of urgency for the visitor. This is nice because people visiting this page are likely looking for answers quickly — especially if they're troubleshooting an issue right before a flight.</h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visits} className="btn-get-started"><button type="button" class="btn btn-primary">
                                            {props.btname}</button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img"  style={{ padding:"5px",marginBottom:"100px" }}>
                                    <img src={props.imgsrc} className="img-fluid animated" alt="homeImage" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             <Footer />
        </>
    )
}
export default Common;