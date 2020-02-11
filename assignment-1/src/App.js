import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    Names: [
      {userName: "Priya", password: "statepassword"},
      {userName: "Vidhur", password: "statepass"}
    ]
  }

  changeNameHandler = (event) => {
    this.setState({
      Names: [
        {userName: event.target.value, password: "newPass"},
        {userName: "Vidhur", password: "newpassVidh"}
      ]
    })
    
  }

  render(){
    return (
    <div className="App">
      <h1>This is my Assignment 1</h1>
      <button onClick = {this.changeNameHandler}>Change Name</button>
     
      <UserOutput username = {this.state.Names[0].userName} password={this.state.Names[0].password}/> 
      <UserOutput username = {this.state.Names[1].userName} password={this.state.Names[1].password}/>
      <UserInput 
      change = {this.changeNameHandler}
      currentName = {this.state.Names[0].userName} //username output lo undhi kabatti, danni oka attribute ga teskuni input lo reference chestham
      />
    </div>
  )
}
}

export default App;
