import React from "react";
import { Link } from "react-router-dom";
import classes from "../Navbar/innerNav.module.css";
export default function App() {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Umbrellas</h2>
      <ul className={classes.List}>
        <li>
          <Link to="/c">Target /</Link>
        </li>
        <li>
          <Link to="/women">Women /</Link>
        </li>
        <li>
          <Link to="/-s-accessories">Women's Accessories /</Link>
        </li>
        <li>
          <Link to="/umbrellas-accessories">Umbrellas</Link>
        </li>
      </ul>
    </div>
  );
}
