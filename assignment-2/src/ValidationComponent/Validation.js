import React from 'react';

const Validation = (props) => {
    
    return(
        <div className="validation">
            <p> The length is {props.textLen}</p>
    <p>{ props.textLen < 5 ? "Text too short" : "Text long enough" } </p>
        </div>
)
    
}



export default Validation