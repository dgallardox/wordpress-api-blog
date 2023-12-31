import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"


export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>
        <h2>WordPress API Blog</h2>
      </Link>
      <ul id='navList'>
        <Link to='/create-post'>
          <li id='navItem'>Create post</li>
        </Link>
      </ul>
    </div>
  );
}
