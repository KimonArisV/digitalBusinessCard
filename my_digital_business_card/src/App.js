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
      <img src={portait} alt="Logo" width="100px"/>
      <div className="nonImage--content">
        <div className="main--info">
          <Main />
        </div>
        <div className="buttons--cont">
          <ButtonEmail/>
          <ButtonLinkedIn/>
        </div>
        <AboutMe />
        <Interest />
        <div className="icons--footer">
          <Socials />
        </div>
      </div>
    </div>

  );
}

export default App;
