import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Polette",
      animal: "Tondeuse",
      breed: "verte",
    }),
    React.createElement(Pet, {
      name: "Toy",
      animal: "Chien",
      breed: "lab",
    }),
    React.createElement(Pet, {
      name: "mistache",
      animal: "chat",
      breed: "petit",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
