import React from 'react'
import classes from './Navbar2.module.css';

export default function Navbar2() {
    return (
        <div className={classes.RightNav}>
            <p style={{fontSize:'12px'}}>You're shopping <span style={{color:'green'}} >(closes 11pm) </span></p>
            <ul className={classes.List}>
                <li>Registries &amp; Lists</li>
                <li>Weekly Ad</li>
                <li>RedCard</li>
                <li>Gift Cards</li>
                <li>Find Stores</li>
                <li>Orders</li>
                <li>0</li>
                <li>More</li>
            </ul>
        </div>
    )
}
