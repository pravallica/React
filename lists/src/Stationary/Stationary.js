import React from 'react';

const Stationary = (props) => {
    return(
        <div className="stationary">
            <p onClick = {props.click}> The name of the item is <b>{props.name}</b> and the price is <b>${props.price}</b></p>
        </div>
    )
}

export default Stationary;