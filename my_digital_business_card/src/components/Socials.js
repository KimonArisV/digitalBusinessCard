import React from "react";
import GithubIcon from "../images/github.png";
import Xtwitter from "../images/X.png";

export default function SocialsInfo() {
    return(
        <footer className="fotter-social">
            <a href="https://github.com/KimonArisV">
                <img src={GithubIcon} alt="icon of LinkedIn" />
            </a>
            <a href="https://twitter.com/KimonV99">
                <img src={Xtwitter} alt="icon of X"/>
            </a>   
        </footer>
    )
}