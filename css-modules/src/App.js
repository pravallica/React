import React, { Component } from "react";
import styled from 'styled-components'
import Grocery from "./Grocery/Grocery";
import "./App.css";

const StyleButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
padding: 10px;
font-size: 15px;
cursor: pointer;
&:hover{
  background-color: ${props => props.alt ? 'yellow' : 'pink'};
  color: black;
  }
  `;
class App extends Component {
  state = {
    Grocery: [
      { id: 1, items: "Eggs", price: 3 },
      { id: 2, items: "Milk", price: 3.5 },
      { id: 3, items: "Bread", price: 1 },
      { id: 4, items: "Chicken", price: 10 }
    ],
    showItem: false
  };

  itemChangeHandler = newPrice => {
    this.setState({
      Grocery: [
        { id:1, items: "Eggs", price: newPrice },
        { id:2, items: "Bread", price: Math.round(Math.random() * 10) },
        { id:3, items: "Milk", price: 1 },
        { id:4, items: "Chicken", price: 10 }
      ]
    });
  };

  toggleContentHandler = () => {
    const show = this.state.showItem;
    this.setState({
      showItem: !show
    });
  };

  render() {
    let NewGroceries = null;
    
    if (this.state.showItem) {
      NewGroceries = (
        <div>
          {this.state.Grocery.map(grocery => {
            return <Grocery 
            items={grocery.items} 
            price={grocery.price} 
            key = {grocery.id} />;
          })}
        </div>
      );
      
    }

    let classes = [];
    if(this.state.Grocery[1].price < 5 ){
      classes.push('red');
    }
    if(this.state.Grocery[1].price <= 2){
      classes.push('bold');
      console.log(classes);
    }

    return (
      <div className="App">
        <p className = {classes.join(' ')}> I am the Groceries Component</p>
        <button onClick={this.itemChangeHandler.bind(this, 4)}> Change</button>
        <StyleButton alt = {this.state.showItem} onClick={this.toggleContentHandler}>
        
          Toggle
        </StyleButton>
        {NewGroceries}
      </div>
      
    );
  }
}

export default App;
