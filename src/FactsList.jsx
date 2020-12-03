import React from "react";
import Fact from "./Fact.jsx";
// TO DO: Create a FactsList functional component which maps through all of the animal facts in data.jsx and returns each item as a Fact component

// Use the div below to maintain existing css styling

const FactsList = ({ facts, btnFunction }) => (
  <div className="factsList">
    {facts.map((fact) => (
      <Fact fact={fact} key={fact.id} btnFunction={btnFunction} />
    ))}
  </div>
);

export default FactsList;
