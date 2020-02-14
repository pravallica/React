import React, { Component } from "react";
import GroceryCss from "./GroceryCss/GroceryCss";
import classes from './App.module.css';



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
    let btnClasses = '';

    if (this.state.showItem) {
      NewGroceries = (
        <div>
          {this.state.Grocery.map(grocery => {
            return <GroceryCss 
            items={grocery.items} 
            price={grocery.price} 
            key = {grocery.id} />;
          })}
        </div>
      );
      btnClasses = classes.Red;
    }

    let classesList = [];
    if(this.state.Grocery[1].price < 5 ){
      classesList.push(classes.red);
    }
    if(this.state.Grocery[1].price <= 2){
      classesList.push(classes.bold);
      console.log(classesList);
    }

    return (
      <div className= {classes.App}>
        <p className = {classesList.join(' ')}> I am the Groceries Css Component</p>
        <button onClick={this.itemChangeHandler.bind(this, 4)}> Change</button>
        <button 
        className= {btnClasses} 
        onClick={this.toggleContentHandler}>
        Toggle
        </button>
        {NewGroceries}
      </div>
      
    );
  }
}

export default App;
