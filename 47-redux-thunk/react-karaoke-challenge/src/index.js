import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/pure-min.css';
import './assets/css/index.css';
import App from './containers/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
