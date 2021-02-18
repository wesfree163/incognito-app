import './App.css';
import React from 'react';
import logo from './logo.svg';
import Amplify from 'aws-amplify';
import ilogo from './img/ilogo.png';
import userI from './img/userIcon.png';
import awsconfig from './aws-exports';
import Button from 'react-bootstrap/Button';
import SearchField from 'react-search-field';
import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';


Amplify.configure(awsconfig)

const searchStyle = {
  
};

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{
        backgroundColor: '#d8d8d8c4'
      }}>
        
        <h2>Incognito App</h2>
        <div className="bar"> 
          <img src={ilogo} className="logo" alt="inc-logo"/>
          <Button className="Button">Home</Button>
          <Button className="Button">Hierarchy</Button>
          <Button className="Button">Add Field</Button>  
        </div>

        <div className="search">
          <SearchField className style={{}}/>
        </div>

        <img src={userI} className="user" alt="inc-logo"/>

        <AmplifySignOut className="AmplifySignOut"/>  
      </header>
    </div>
  );
}

export default withAuthenticator(App);
