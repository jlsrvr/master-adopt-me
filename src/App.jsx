import React from "react";
import { render } from "react-dom";
import Pet from "./Pet.jsx";

const App = () => {
  return(
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Polette" animal="Tondeuse" breed="verte" />
      <Pet name="Toy" animal="Chien" breed="lab" />
      <Pet name="Mistache" animal="chat" breed="petit" />
    </div>
  )
};
render(<App />, document.getElementById("root"));
