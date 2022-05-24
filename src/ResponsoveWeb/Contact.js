import React from "react";
import { NavLink } from "react-bootstrap";

const Conatct = () => {
    return (
        <>
            <section id="headers" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">

                                <div className="col-md-6 order-1 order-lg-2" style={{ marginTop: "40px", padding: "100px" }}>
                                    <h1>Connect With Us</h1><br />
                                    <h4><strong> This "Contact Us" page stands out:</strong></h4>
                                    <p style={{ lineHeight: "2", letterSpacing: "2px" }}>
                                        Aside from the obvious pink flamingo, Brandaffair captures the visitor's attention with three methods of communication. The map provides the exact location of the office, the "Meet Us" section includes a phone number and email for general inquiries, and the "Pitch Us" section includes a template that helps businesses submit their ideas directly to the company for consideration.</p>
                                </div>

                                <div className="col-md-6 order-1 order-lg-2 text-center" style={{ marginTop: "40px", padding: "100px" }}>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                        <input type="text" class="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>

                                    <div class="input-group mb-3">
                                        <input type="email" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span class="input-group-text" id="basic-addon2">Email Id</span>
                                    </div>

                                    {/* <label for="basic-url" class="form-label">Your vanity URL</label> */}
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon3">Mobile Number</span>
                                        <input type="text" class="form-control" placeholder="Enter Mobile Number " id="basic-url" aria-describedby="basic-addon3" />
                                    </div>

                                    <div class="input-group mb-3">
                                        <span class="input-group-text">$</span>
                                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                        <span class="input-group-text">.00</span>
                                    </div>

                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
                                        <span class="input-group-text">@</span>
                                        <input type="text" class="form-control" placeholder="Server" aria-label="Server" />
                                    </div>

                                    <div class="input-group">
                                        <span class="input-group-text">With textarea</span>
                                        <textarea class="form-control" aria-label="With textarea"></textarea>
                                    </div> <br />
                                    <NavLink to="/"><button type="button" class="btn btn-primary">Submit</button></NavLink>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Conatct;