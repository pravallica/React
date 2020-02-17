//To run this copy,paste 

import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    name: "Pravu",
    lastname: "Mamidibathula",
    age: 23
  };

  changeName = newName => {
    this.setState({
      name: newName
    });
  };

  changeNameFromInput = event => {
    this.setState({
      lastname: event.target.value
    });
  };

  changeNameAndShow = event => {
    this.setState({
      age: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <h1>2 way Binding</h1>
        <h2> One way Binding </h2>
        <p> {this.state.name} </p>
        <button onClick={() => this.changeName("Kiran :(")}>
          Change Name using ES6
        </button>
        <button onClick={this.changeName.bind(this, "Kiran :)")}>
          Change Name using bind
        </button>
        <hr />
        <h2> Two way Binding 1</h2>
        <p> {this.state.lastname} </p>
        <input onChange={this.changeNameFromInput} />
        <hr />
        <h2> Two way Binding 2</h2>
        <p> {this.state.age} </p>
        <input onChange={this.changeNameAndShow} value={this.state.age} />
      </div>
    );
  }
}
export default App;
