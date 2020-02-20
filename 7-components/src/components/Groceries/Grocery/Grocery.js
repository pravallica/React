import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import classes from "./Grocery.module.css";
// import WithClass from '../../../hoc/WithClass';
import withClassFn from "../../../hoc/withClassFn";
import AuthContext from "../../context/auth-context";

class Grocery extends Component {
    static contextType = AuthContext;
  render() {
    console.log("Grocery.js... Rendering");
    return (
      // <WithClass classes= {classes.Grocery}>
      <Aux>
        
          {this.context.isAuth ? <p> Authenticated</p> : <p>Please Login</p>
          }
      
        <p>
          The item name is {this.props.items} and price is {this.props.price}
        </p>
      </Aux>
      // </WithClass>
    );
  }
}

export default withClassFn(Grocery, classes.Grocery);
