import notebookReducer from './notebook';
import paintingReducer from './painting';
import { combineReducers } from 'redux';

export default combineReducers({
  notebook: notebookReducer,
  painting: paintingReducer,
})
