import React from 'react';
import styled from 'styled-components';



const Grid = styled.div`
display: grid;
grid-gap:20px;
grid-template-columns: 1fr 1fr;

`;
const Col = styled.div`
    background-color:coral;
    border: 1px solid green;
    color: white;
`;
 
const Styled = () => {
    return(
        <Grid>
          <Col> Loooooong Column.jhfdjgfjsdfjsdhfjhfmdsnfdsnfjdshfjsdhfsdcmn   jehfe jfdsfksdhfkjlshf jdhfjsdyfiwueojfkjsdfjks  hfjdhfuiwyeoijf hfuehfgusdbfkjs</Col>
          <Col>Double Size </Col>
          <Col> ME </Col>
          <Col> Loooooong Column</Col>
          <Col>Double Size </Col>
          <Col> ME </Col>
          <Col> Loooooong Column</Col>
          <Col>Double Size </Col>
          <Col> ME </Col>
       
      </Grid>
    )
}

export default Styled;



// const StyleDiv = styled.div`
//   color: ${( props ) => props.color};
// `;
// const Styled = () => {
    //     return(
    //     <StyleDiv color="blue">
    //         <p> This div has red color</p>
    //     </StyleDiv>
    //     )
        
    // }