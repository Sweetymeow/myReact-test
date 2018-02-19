import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './comps/App';
import registerServiceWorker from './registerServiceWorker';

// const PropText = (props) => <h1>{props.myName} is here in props</h1>

ReactDOM.render(<App myName="Wendy" myAge={28} />, document.getElementById('root'));

registerServiceWorker();
