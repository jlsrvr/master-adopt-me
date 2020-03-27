const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};
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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
