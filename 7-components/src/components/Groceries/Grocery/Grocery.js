import React, { Component } from 'react';
import classes from './Grocery.module.css'

    
class Grocery extends Component{
    render(){
    console.log('Grocery.js... Rendering');
    return(
        <div className= {classes.Grocery}>
        <p>The item name is {this.props.items } and price is { this.props.price }</p>
        </div>
    );
}
} 
    
export default Grocery;