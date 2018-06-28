import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/pure-min.css';
import './assets/css/index.css';
import App from './containers/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
// import logger from './middleware/logger';
import ReduxThunk from 'redux-thunk';

const logger = store => next => action => {
  console.log('dispatching', action)
  console.log('prev state', store.getState())
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    // Raven.captureException(err, {
    //   extra: {
    //     action,
    //     state: store.getState()
    //   }
    // })
    throw err
  }
}

const store = createStore(reducer, applyMiddleware(logger, crashReporter, ReduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
