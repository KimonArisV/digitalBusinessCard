import React from "react";
import MailIcon from "../images/email.png";

export default function ButtonEmail() {
    return (
        <a href="mailto: kvogt@g.harvard.edu" className="icon--button" id="icon--button-email">
            <img src={MailIcon} className="logos" />
            <p>Email</p>
        </a>
    )
}