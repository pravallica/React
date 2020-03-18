import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Product from "../Products/Product/Product";
import axios from "axios";

class Products extends Component {
  state = {
    Products: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        const products = res.data;
        this.setState({
          Products: products
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let products = this.state.Products.map(prod => {
      return (
          <Container>
              <Row>
                  <Col lg={4}>
                  <Product
          key={prod.id}
          name={prod.title}
          price={prod.id}
          description={prod.body}
        />
                  </Col>
              </Row>
          </Container>
       
      );
    });
    return <div>{products}</div>;
  }
}

export default Products;
