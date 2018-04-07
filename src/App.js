import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Nav from './components/nav.js';
import Content from './components/content.js';

const App = ()=> (
      <div className="App">
       <Header />
       <Nav />
      <Content />
      </div>
    );

export default App;
