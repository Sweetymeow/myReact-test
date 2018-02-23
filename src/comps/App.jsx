import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';
import Board from './noteboard/Board';
import TestComp from './tutorial/TestComp';
import ChartSamples from './tutorial/ChartSamples';

// const Clock = (props) => <h4>It is {props.date.toLocaleTimeString()} now.</h4>
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// class
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: '/',
      feed: null
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentWillMount() { // load data before UI render
    firebase.initializeApp({
      apiKey: 'AIzaSyDx2SbTs_Y4-wcJIDCdOmXp3AE5EG26Rws',
      authDomain: 'react-product-chart.firebaseapp.com',
      databaseURL: 'https://react-product-chart.firebaseio.com',
      projectId: 'react-product-chart',
      storageBucket: 'react-product-chart.appspot.com',
      messagingSenderId: '594004075004'
    });
    firebase.database()
      .ref(`/`) // ref() canuse to pass user related info
      .on('value', snapshot => {
        this.setState({
          feed: snapshot.val()
        })
      });
  }

  handleItemClick(e, { name }) {
    e.preventDefault();
    console.log(name);
    this.setState({
      activeItem: name
    });
  }

  render() {
    const { activeItem } = this.state;
    console.log(this.state.feed);
    return (
      <Router>
        <div className="App">
          <Menu pointing secondary>
            <Menu.Item>
              <img src={logo} className="App-logo" alt="logo" />
            </Menu.Item>
            <Menu.Item name="Home" as={Link} to="/" />
            <Menu.Item name="Test" as={Link} to="/test" />
            <Menu.Item name="Form" as={Link} to="/form" />
            <Menu.Item name="Note Board" as={Link} to="/noteBoard" />
            {/* <Menu.Item name='NoteBoard' active={activeItem === 'noteBoard'} onClick={this.handleItemClick} /> */}
            <Menu.Menu position="right">
              <Menu.Item name="logout" active={activeItem === 'logout'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu>

          <Route exact path="/" component={ChartSamples} />
          <Route path="/test" render={() => ( <TestComp myName="Wendy" myAge={28} /> )} />
          <Route path="/form" render={() => ( <TestComp myName="Wendy" myAge={28} /> )} />
          <Route path="/noteBoard" render={() => ( <Board count={10} /> )} />
        </div>
      </Router>
    );
  }
}

export default App;
