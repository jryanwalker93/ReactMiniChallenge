import React from "react";
import Fact from "./Fact.jsx";
import animalFacts from "./data.jsx";

const FactsList = ({ facts }) => (
  <div className="factsList">
    {facts.map((item) => (
      <Fact fact={item} key={item.id} />
    ))}
  </div>
);

export default FactsList;
