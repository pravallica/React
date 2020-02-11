import React from 'react';

const outStyle = {
    color: 'coral'
};
const UserOutput = (props) => {
    return(
        <div className="root">
            <p style={outStyle}>My name is {props.username} and my password is {props.password}</p>   
        </div>
        
    )
}

export default UserOutput;