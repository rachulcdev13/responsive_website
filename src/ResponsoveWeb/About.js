import React from "react";
// import Home from "./Home";
import web from "./img5.png";

import Common from "./Common";

const About = () => {
    return (
        <>
            <Common
                name='Welcome to the Aboute page'
                visits='/Conatct'
                imgsrc={web}
                btname="Conatct now"
            />
        </>
    )
}
export default About;