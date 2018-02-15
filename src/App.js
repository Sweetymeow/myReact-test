import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// sample of Stateless function
const PropText = (props) => <h4>{props.newName} is here in props</h4>
const PropTextV2 = ({nickName}) => <h4>{nickName} is here in props using another syntax</h4>

// class
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h3>I'm {this.props.myName}, and {this.props.myAge}-years-old</h3>
        <PropText newName="WEN" />
        <PropTextV2 nickName="Sweety" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
