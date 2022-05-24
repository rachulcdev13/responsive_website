import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const currYear = new Date().getFullYear();
    return (
        <>
            <footer class="bg-light text-center text-lg-start footer">
                <div class="text-center p-3">
                    © {currYear} Copyright: 
                    <NavLink class="footertext" to="/"></NavLink>responsive.website © {currYear} Copyright 
                </div>
            </footer>
        </>
    )
}
export default Footer;