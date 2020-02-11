import React from 'react'

const Char = (props) => {
    const style = {
        backgroundColor: 'azure',
        display: 'inline-block',
        padding:'16px',
        textAlign:'center',
        margin: '16px',
        border: '1px solid gray'
    }
    return(
    <div style = {style} className="Char">
        <p onClick = {props.click}>{props.char}</p>
    </div>)
}

export default Char;