import React from "react";
import classes from './App.module.css'
import { BrowserRouter as Router } from "react-router-dom";
import InnerNav from "./components/Navbar/InnerNav";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

export default function App() {
  return (
    <div className={classes.App}>
      <Router>
        <Navbar />
        <hr />
        <InnerNav />
        <Products />
      </Router>
    </div>
  );
}
