import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Checkbox from './Checkbox';
import Note from './Note';
import Clock from './Clock';

// sample of Stateless function
const PropText = (props) => <h4>{props.newName} is here in props</h4>
const PropTextV2 = ({nickName}) => <h4>{nickName} is here in props using another syntax</h4>
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

        <Note />

        {/* <Checkbox label="Checkbox 1:" defaultStatus={true} /> */}
      </div>
    );
  }
}

export default App;
