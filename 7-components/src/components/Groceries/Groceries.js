import React from 'react';
import Grocery from './Grocery/Grocery';


const Groceries = (props) => {
  console.log('Groceries.js... Rendering');
  return (props.groceries.map(grocery => {
    return (
        <Grocery items={grocery.items} 
        price={grocery.price} 
        key = {grocery.id} />
)}))};

  export default Groceries;