import React from 'react';
import styled from 'styled-components';

const StyleCard = styled.div`
    background-color: #3d87c2;
    color:white;
    border: 1px solid black;
    height: 200px;
    width:20%;
    margin: 30px;
    transition: width 2s,height 2s ease 0s;
    &:hover{
        background-color:#698398;
        width:30% ;
        height:250px;
    }
`;

const Card = (props) => {
    return(
        <StyleCard> 
            <p> {props.ques} </p>
            <p> {props.ans} </p>
        </StyleCard>  
    )
}

export default Card;