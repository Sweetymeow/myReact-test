import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Board from './noteboard/Board';
import MenuHeader from './semanticUI/MenuHeader';
import TestComp from './tutorial/TestComp';

// const Clock = (props) => <h4>It is {props.date.toLocaleTimeString()} now.</h4>

// class
class App extends Component {
  componentWillMount() { // load data before UI render
    firebase.initializeApp({
      apiKey: 'AIzaSyDx2SbTs_Y4-wcJIDCdOmXp3AE5EG26Rws',
      authDomain: 'react-product-chart.firebaseapp.com',
      databaseURL: 'https://react-product-chart.firebaseio.com',
      projectId: 'react-product-chart',
      storageBucket: 'react-product-chart.appspot.com',
      messagingSenderId: '594004075004'
    });
  }
  render() {
    return (
      <div className="App">
        <MenuHeader />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        {/* <Route path="/" component=""></Route> */}
        <TestComp myName="Wendy" myAge={28} />

        {/* <Board count={10} /> */}
      </div>
    );
  }
}

export default App;
