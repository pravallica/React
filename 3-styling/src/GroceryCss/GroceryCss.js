import React from 'react';
import classes from './GroceryCss.module.css'

    
const Grocery = (props) =>{
    return(
        <div className= {classes.Grocery}>
        <p>The item name is { props.items } and price is { props.price }</p>
        </div>
    )
};
export default Grocery;