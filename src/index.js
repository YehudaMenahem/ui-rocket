// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import Sass
import './styles/app.scss';

// Import components
import App from  './components/App';

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));