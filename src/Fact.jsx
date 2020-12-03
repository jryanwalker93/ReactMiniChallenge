import React from "react";
// TO DO: Create a Fact Functional component which returns a div in the format below

// Use the div below to maintain existing CSS styling

const Fact = ({ fact, btnFunction }) => {
  return (
    <div className="factCard">
      <h1>{fact.animal}</h1>
      {/* TODO: Attach a click event to the button */}
      <button onClick={btnFunction}>{"Click to Favorite"}</button>
      <img src={fact.image} width="600" height="400" />
      <h3>{fact.fact}</h3>
    </div>
  );
};

export default Fact;
