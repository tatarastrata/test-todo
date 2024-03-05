import { combineReducers } from 'redux';
import todosReducer from './todos-reducer';
import { IRootState } from '../types';

const rootReducer = combineReducers<IRootState>({
  todos: todosReducer,
});

export default rootReducer;
