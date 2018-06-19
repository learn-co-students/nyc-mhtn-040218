import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import UUID from 'uuid';

import { createStore } from 'redux';

const initialState = {
  hello: 'world',
  todos: [],
}

// key word ==> reducer = .reduce
// Reducer is a PURE FUNCTION!!! SO PURE!!!
const reducer = (state = initialState, action) => {
  // Read-Only == DON'T MUTATE STATE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  console.log('state', state);
  console.log('action', action);

  switch (action.type) {
    case 'ADD_NOTE':
      // ADD A NOTE
      return {...state, todos: [...state.todos, { id: UUID(), text: 'do something'}]};
    case 'DELETE_NOTE':
      // DELETE A NOTE
      return {...state};
    default:
      return state;
  }
  // if (action.type === 'ADD_NOTE') {
  //   // ADD A NOTE
  // } else if (action.type === 'DELETE_NOTE') {
  //   // DEKLETE A NOTE
  // }


  // return state;
}

const store = createStore(reducer);

console.log('store', store);
console.log('getState', store.getState())

// dispatch ==> is used to send `actions` to the `reducer` to make changes to `state`
// getState to see changes

const action1 = {
  type: "ADD_NOTE",
}

const action2 = {
  type: "DELETE_NOTE",
}

store.dispatch(action1);
console.log('action1 getState', store.getState())

store.dispatch(action2);
console.log('action2 getState', store.getState())

store.dispatch(action1);
console.log('action1 getState', store.getState())
store.dispatch(action1);
console.log('action1 getState', store.getState())
store.dispatch(action1);
console.log('action1 getState', store.getState())
store.dispatch(action1);
console.log('action1 getState', store.getState())
store.dispatch(action1);
console.log('action1 getState', store.getState())
store.dispatch(action1);
console.log('action1 getState', store.getState())

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
