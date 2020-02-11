import React from 'react';

const Grocery = (props) =>{
    return(
        <div className="Grocery">
        {/* <h1>This is Grocery component</h1> */}
        <p>The item name is { props.items } and price is { props.price }</p>
       
        </div>
    )

}

export default Grocery;