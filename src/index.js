// Import the React and ReactDOM libraries
import React,{Profiler} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// Import Sass
import './styles/app.scss';

// Import components
import App from  './components/App';

// Take the react component and show it on the screen
ReactDOM.render(
<Provider store={createStore(reducers)}>
    <Profiler
        id="App"
        onRender={(id, phase, actualDuration) => {
            console.log(`[Profiler] ${id} - rendered in phase: ${actualDuration}ms ${phase}`);
        }}
    >
        <App />
    </Profiler>

</Provider>, document.querySelector('#root'));