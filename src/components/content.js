import React, { Component } from 'react';
import firebase from '../firebase.service';
import '../style/content.css';
const database = firebase.database();

let content = "retrieving..."

const Content = ()=> {
  //content = database.ref('/content').on('value',snapshot => snapshot.val());
  
  return(
      <main className="content">
      
        <p>{content}</p>
      </main>
    );
  }
Content
export default Content;