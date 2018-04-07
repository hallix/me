import React, { Component } from 'react';
import '../style/nav.css';

const Nav = ()=> (
      <nav className="navigation">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">About me</a></li>
        </ul>
      </nav>
    );

export default Nav;