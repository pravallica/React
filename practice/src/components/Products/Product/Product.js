import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import classes from "./Product.module.css";
const Product = props => {
  return (
    <Container className={classes.Container}>
      <Card className={classes.Card}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKJY7_--5KC-1Vu0lQCAHuRPDAjdxM-3ErSq9jdnYPhYvcfrCW" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <p style={{ fontSize: "10px", color: "gray" }}> Cirra by Shed </p>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text> Price: $ {props.price}</Card.Text>
          <Button className={classes.Add}> Add to Cart </Button>
        </Card.Body>
      </Card>
     
      
    </Container>
  );
};

export default Product;
