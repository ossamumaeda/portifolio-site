import React from "react";
import "../styles/Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
function Footer(){

    return (
    <div className="footer">
        <div className="socialMedia">
            <InstagramIcon/>
            <LinkedInIcon/>
        </div>
        <p>&copy; 2022 LINK</p>
    </div>
    );

}

export default Footer;