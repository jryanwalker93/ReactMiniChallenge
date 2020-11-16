import React, { useState } from "react";
import FactsList from "./FactsList.jsx";
import animalFacts from "./data.jsx";

const App = () => {
  const [facts, setFacts] = useState(animalFacts);
  return (
    <div className="main">
      <FactsList facts={facts} />
    </div>
  );
};

export default App;
