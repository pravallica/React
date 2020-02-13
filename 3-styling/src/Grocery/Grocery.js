import React from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`
    border: 1px solid green;
    &:hover{
        background-color:purple;
    }
    @media (min-width: 500px) {
      border:2px dashed red;
    }
    `;
const Grocery = (props) =>{
    return(
      
        <StyleDiv>
        
        <p>The item name is { props.items } and price is { props.price }</p>
        </StyleDiv>
       
     
    )
};
    


export default Grocery;