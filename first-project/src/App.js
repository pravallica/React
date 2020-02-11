import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    Persons: [
      {name: "Mill", age: 29},
      {name: "Pravu", age: 26}
    ]
  }

  switchNameHandler = (newName) =>{
  
    //changing the state when button clicked
    // DO NOT DO THIS this.state.persons[0].name = "Maxis";
    this.setState({
      Persons: [
        {name: newName, age: 29},
        {name: "Pravu", age: 45}
      ],
      showPersons: false
    })
  }

  changeNameHandler = (event) =>{
    this.setState({
      Persons: [
        {name: "Max", age: 29},
        {name: event.target.value, age: 45}
      ]
    })
  }

  toggleUsersHandler = () => {
    const doesShow = this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      })
  }

 
  render() {
    let persons = null;
    if(this.state.showPersons){
      // persons = (
        <div>
          <Person 
          name={this.state.Persons[0].name} 
          age ={this.state.Persons[0].age}
          click = {() => this.switchNameHandler('Asresha')}
          />
          <Person 
          name={this.state.Persons[1].name}
          age ={this.state.Persons[1].age}
          changed = {this.changeNameHandler}>
            <p>This is a child paragraph</p>
            </Person>
        </div> 
      // );
    }
    return (
      <div className="App">
        <h1> Hi, Im a React App </h1>
        <button onClick={this.toggleUsersHandler}>Switch Name</button>
        {/* <button onClick={this.switchNameHandler}>Switch Name</button>  No arguments */}
        {persons}
      </div>
    );
    // compiles to JS as => 
      // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Im a React App'));
  }
}

export default App;
