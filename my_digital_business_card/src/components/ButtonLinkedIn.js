import React from "react";
import LinkedInLogo from "../images/LI_In.png";

export default function ButtonLinkedIn() {
    return (
        <a href="https://www.linkedin.com/in/kimon-aristotelis-v-5695b7174/" 
        className="icon--button" id="icon--button-linkedin" >
            <img src={LinkedInLogo} className="logos" />
            <p>LinkedIn</p>
        </a>
    )
}