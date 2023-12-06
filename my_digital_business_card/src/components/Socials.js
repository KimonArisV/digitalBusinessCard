import React from "react";
import GithubIcon from "../images/github.png";
import Xtwitter from "../images/X.png";

export default function SocialsInfo() {
    return(
        <footer className="fotter-social">
            <a href="https://github.com/KimonArisV" className="icon--button1">
                <img src={GithubIcon} alt="icon of LinkedIn" className="logos" id="github_id"/>
            </a>
            <a href="https://twitter.com/KimonV99" className="icon--button1">
                <img src={Xtwitter} alt="icon of X" className="logos" id="twitter_id" />
            </a>   
        </footer>
    )
}