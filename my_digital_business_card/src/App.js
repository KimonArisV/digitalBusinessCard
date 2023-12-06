import React from "react";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import portait from "./images/kimon.jpeg";


function App() {
  return (
    <div className="App">
      <img src={portait} alt="Logo" width="100px"/>
      <Main />
      <AboutMe />
    </div>

  );
}

export default App;
