import React from 'react';
import classes from './Grocery.module.css'

    
const Grocery = (props) =>{
    console.log('Grocery.js... Rendering');
    return(
        <div className= {classes.Grocery}>
        <p>The item name is { props.items } and price is { props.price }</p>
        </div>
    )
};
export default Grocery;