import React, { Component } from "react";
import Groceries from "../components/Groceries/Groceries";
import classes from "./App.module.css";
import Aux from "../hoc/Aux";
import withClassFn from "../hoc/withClassFn";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../components/context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js... Constructor");
    // this.state = {} is the same as state = {}
  }
  state = {
    Grocery: [
      { id: 1, items: "Eggs", price: 3 },
      { id: 2, items: "Milk", price: 3.5 },
      { id: 3, items: "Bread", price: 1 },
      { id: 4, items: "Chicken", price: 10 }
    ],
    showItem: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("App.js... getDerivedStateFromProps", props);
    return state;
  }
  componentDidMount() {
    console.log("App.js...componentDidMount() ");
  }

  itemChangeHandler = newPrice => {
    this.setState({
      Grocery: [
        { id: 1, items: "Eggs", price: newPrice },
        { id: 2, items: "Bread", price: Math.round(Math.random() * 10) },
        { id: 3, items: "Milk", price: 1 },
        { id: 4, items: "Chicken", price: 10 }
      ],
      isAuth:false
    });
  };

  toggleContentHandler = () => {
    const show = this.state.showItem;
    this.setState({
      showItem: !show
    });
  };

  isAuthHandler = () => {
    this.setState({
      isAuth: true
    });
  };

  render() {
    console.log("App.js... render()");
    let NewGroceries = null;

    if (this.state.showItem) {
      NewGroceries = (
        <Groceries
          groceries={this.state.Grocery}
          groceriesAuth={this.state.isAuth}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value = {{
            isAuth: this.state.isAuth,
            login: this.isAuthHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              showItem={this.state.showItem}
              Grocery={this.state.Grocery}
              change={this.itemChangeHandler.bind(this, 4)}
              toggle={this.toggleContentHandler}
              title={this.props.appTitle}
              
            />
          ) : null}
          {NewGroceries}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClassFn(App, classes.App);
