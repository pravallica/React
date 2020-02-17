import React from "react";
import classes from "./Cockpit.module.css";

const cockpit = props => {
  console.log('Cockpit.js... Rendering');
  let classesList = [];
  let btnClasses = "";
  if (props.showItem) {
    btnClasses = classes.Red;
  }
  if (props.Grocery[1].price < 5) {
    classesList.push(classes.red);
  }
  if (props.Grocery[1].price <= 2) {
    classesList.push(classes.bold);
    console.log(classesList);
  }
  return (
    <div className={classes.Cockpit}> {props.title}
      <p className={classesList.join(" ")}> I am the Groceries Css Component</p>
      <button onClick={props.change}> Change</button>
      <button className={btnClasses} onClick={props.toggle}>
        Toggle
      </button>
    </div>
  );
};

export default cockpit;
