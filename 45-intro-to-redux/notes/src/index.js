import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'



const store = createStore(reducer);
//
// console.log('store', store);
// console.log('getState', store.getState())

// dispatch ==> is used to send `actions` to the `reducer` to make changes to `state`
// getState to see changes

//
// store.dispatch(action1);
// console.log('action1 getState', store.getState())
//
// store.dispatch(action2);
// console.log('action2 getState', store.getState())
//
// store.dispatch(action1);
// console.log('action1 getState', store.getState())
// store.dispatch(action1);
// console.log('action1 getState', store.getState())
// store.dispatch(action1);
// console.log('action1 getState', store.getState())
// store.dispatch(action1);
// console.log('action1 getState', store.getState())
// store.dispatch(action1);
// console.log('action1 getState', store.getState())
// store.dispatch(action1);
// console.log('action1 getState', store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
