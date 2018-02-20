import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
// import Checkbox from './Checkbox';
import Board from './noteboard/Board';
import Clock from './Clock';

// sample of Stateless function
const PropText = (props) => <p>{ props.newName } is here in props</p>;
const PropTextV2 = ({ nickName }) => <p>{ nickName } is here in props using another syntax</p>;
// const Clock = (props) => <h4>It is {props.date.toLocaleTimeString()} now.</h4>

// class
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h3>I'm {this.props.myName}, and {this.props.myAge}-years-old</h3>
        <PropText newName="WEN" />
        <PropTextV2 nickName="Sweety" />
        <Clock date={new Date()} />

        <Board />

        {/* <Checkbox label="Checkbox 1:" defaultStatus={true} /> */}
      </div>
    );
  }
}

App.propTypes = {
  myName: PropTypes.string,
  myAge: PropTypes.number
};

export default App;
