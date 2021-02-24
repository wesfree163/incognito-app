import './App.css';
import $ from "jquery";
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

        <div className="bar" style={{
          width: '64%'
        }}> 
          <img src={ilogo} className="logo" alt="inc-logo"/>
          <Button className="navButton">Home</Button>
          <Button className="navButton">Hierarchy</Button>
          <Button className="navButton">Add Field</Button>  

          {/* <div className="navButton search">
            <SearchField className style={{}}/>
          </div> */}

          <div className="select">
            ---
            <button className="sort">▼</button>
          </div>

          <img src={userI} className="user" alt="user-logo"/> 
        </div>

        <div className="ContainerA">
          {/* <Button className=""></Button>  */}
          <h4>Region</h4>
        </div>

        <div className="ContainerB">
          {/* <Button className=""></Button>  */}
          <button className="Add">Add Field</button>
        </div>

        {/* <div className="navButton search">
          <SearchField className style={{}}/>
        </div> */}
        
        <Button className="submit">Submit</Button> 
        <AmplifySignOut className="AmplifySignOut"/>  
      </header>
    </div>
  );
}

export default withAuthenticator(App);
