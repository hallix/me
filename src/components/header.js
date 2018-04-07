import React, { Component } from 'react';
import '../style/header.css';

const Header = ()=> (
      <header className="header">
         <div className="header-github"> <a href="https://github.com/hallix" target="_blank"> <img alt="image" src="image/octo.png" /></a></div>
         <div  className="profile-pic">
            <img alt="image" src="image/profile.jpg" />
         </div>
         <div  className="profile-pic-shadow"></div>
      </header>
    );

export default Header;
