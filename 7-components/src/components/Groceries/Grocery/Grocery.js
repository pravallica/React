import React, { Component } from 'react';
// import Aux from '../../../hoc/Aux';
import classes from './Grocery.module.css'
import WithClass from '../../../hoc/WithClass';

    
class Grocery extends Component{
    render(){
    console.log('Grocery.js... Rendering');
    return(
        // <Aux>
        <WithClass classes= {classes.Grocery}>
        <p>The item name is {this.props.items } and price is { this.props.price }</p>
       
        </WithClass>
        // </Aux>
    );
}
} 
    
export default Grocery;