import React from "react";
import classes from "./Card.module.css";

const Card = props => {
  return (
    <div className={classes.Card} >
      <div> {props.ques} </div>
      <div> {props.ans} </div>
      <input type="text" Placeholder="Enter Answer" onChange = {props.toggle}/>
      <button onClick={props.click}> Show Answer</button>
      {/* <button onClick={props.toggle}> Toggle Answer</button> */}
    </div>
  );
};

export default Card;
