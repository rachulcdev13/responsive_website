import React from "react";
import { NavLink } from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = (props) => { 
    return (
        <>
            <div className="col-md-3 col-10 mx-auto">
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt="Card Images" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/"><button type="button" class="btn btn-primary" >Go To Card</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;