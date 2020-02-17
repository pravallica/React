import React, { Component } from "react";
import Groceries from "../components/Groceries/Groceries";
import classes from "./App.module.css";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props){
      super(props);
      console.log('App.js... Constructor');
      // this.state = {} is the same as state = {}
  }
  state = {
    Grocery: [
      { id: 1, items: "Eggs", price: 3 },
      { id: 2, items: "Milk", price: 3.5 },
      { id: 3, items: "Bread", price: 1 },
      { id: 4, items: "Chicken", price: 10 }
    ],
    showItem: false
  };

  
  static getDerivedStateFromProps(props,state){
    console.log('App.js... getDerivedStateFromProps',props)
    return state;
  }
  componentDidMount(){
    console.log('App.js...componentDidMount() ');
  }
  

  itemChangeHandler = newPrice => {
    this.setState({
      Grocery: [
        { id: 1, items: "Eggs", price: newPrice },
        { id: 2, items: "Bread", price: Math.round(Math.random() * 10) },
        { id: 3, items: "Milk", price: 1 },
        { id: 4, items: "Chicken", price: 10 }
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
    console.log('App.js... render()')
    let NewGroceries = null;

    if (this.state.showItem) {
      NewGroceries = <Groceries groceries={this.state.Grocery} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showItem={this.state.showItem}
          Grocery={this.state.Grocery}
          change={this.itemChangeHandler.bind(this, 4)}
          toggle={this.toggleContentHandler}
          title = {this.props.appTitle}
        />
        {NewGroceries}
      </div>
    );
  }
}

export default App;
