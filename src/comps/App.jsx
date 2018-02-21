import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';
// import Checkbox from './Checkbox';
import MenuHeader from './semanticUI/MenuHeader';
import Board from './noteboard/Board';
import Clock from './Clock';

// sample of Stateless function
const PropText = (props) => <p>{ props.newName } is here in props</p>;
const PropTextV2 = ({ nickName }) => <p>{ nickName } is here in props using another syntax</p>;
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
        <h3>I'm {this.props.myName}, and {this.props.myAge}-years-old</h3>
        <PropText newName="WEN" />
        <PropTextV2 nickName="Sweety" />
        <Clock date={new Date()} />

        <Board count={10} />

        {/* <Checkbox label="Checkbox 1:" defaultStatus={true} /> */}
      </div>
    );
  }
}

App.propTypes = {
  myName: PropTypes.string,
  myAge: PropTypes.number
};
PropText.propTypes = {
  newName: PropTypes.string
};
PropTextV2.propTypes = {
  nickName: PropTypes.string
};

export default App;
