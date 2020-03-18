import React from "react";
import Container from "react-bootstrap/Container";
import classes from "./Navbar.module.css";
import Navbar2 from './Navbar2/Navbar2'
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosCart } from "react-icons/io";

import { FiTarget } from "react-icons/fi";

const Navbars = () => {
  return (
      <div>
    
    <Container fluid className={classes.Container}>
       
      <Navbar>
        <Navbar.Brand href="#home">
          <FiTarget style={{ color: "azure", fontSize: "50px" }} />
        </Navbar.Brand>
        <Nav className="mr-auto" style={{fontSize: '18px', fontWeight: '900'}}>
          <Nav.Link style={{color: "azure"}} href="#home">Categories <MdArrowDropDown/>
 </Nav.Link>
          <Nav.Link style={{color: "azure"}} href="#features">Deals <MdArrowDropDown/></Nav.Link>
          <Nav.Link style={{color: "azure"}} href="#pricing">What's New <MdArrowDropDown/></Nav.Link>
          <Nav.Link style={{color: "azure"}} href="#sddelivery">Same Day Delivery</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Nav.Link href="#user">
          <FaUserCircle className={classes.Icon} /><MdArrowDropDown/>
        </Nav.Link>
        <Nav.Link href="#cart">
<IoIosCart className={classes.Icon}/>
        </Nav.Link>
      </Navbar>
    </Container>
    <Navbar2/>
    </div>
  );
};

export default Navbars;
