import React from "react";
// TO DO: Create an App class component which renders FactsList
import FactsList from "./FactsList.jsx";
import data from "./data.jsx";

// Use the div provided below to maintain existing CSS styling

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: false,
      facts: data,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    // when the favorite button is clicked
    // update the text of the button from "Click to Favorite" to "Favorited"
    // change the button background color from "yellow" to "pink"
    // Hint: use e.target.style.background to change the background color
    e.preventDefault();
    e.target.style.background = "yellow"
      ? (e.target.style.background = "pink")
      : (e.target.style.background = "yellow");
    // Hint: use e.target.innerHTML to update the button text
    e.target.innerHTML = "Click to Favorite"
      ? (e.target.innerHTML = "Favorited")
      : (e.target.innerHTML = "Click to Favorite");
  }

  render() {
    return (
      <div className="main">
        <FactsList
          facts={this.state.facts}
          btnFunction={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default App;
