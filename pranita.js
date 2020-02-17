import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Description />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <h2> This is the Header</h2>
      </div>
    );
  }
}

class Description extends React.Component {
  render() {
    var mystyles = {
      color: "coral"
    };
    return (
      <div className="description" style={mystyles}>
        <p>This paragraph contains my skills</p>
        <p>I am familiar with HTML,CSS,Javascript, Bootstrap and React</p>
      </div>
    );
  }
}

export default App;
