import React from "react";
import Main from "./components/Main";
import ButtonEmail from "./components/ButtonEmail";
import ButtonLinkedIn from "./components/ButtonLinkedIn";
import AboutMe from "./components/AboutMe";
import Interest from "./components/Interests";
import Socials from "./components/Socials";
import portait from "./images/kimon.jpeg";


function App() {
  return (
    <div className="App">
      <img src={portait} alt="Logo" />
      <div className="nonImageSocials--content">
        <div className="main--info">
          <Main />
        </div>
        <div className="icons--buttons--container">
          <ButtonEmail/>
          <ButtonLinkedIn/>
        </div>
        <AboutMe />
        <Interest />
      </div>
      <div className="icons--socials--container">
        <Socials />
      </div>
    </div>

  );
}

export default App;
