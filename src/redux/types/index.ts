import { ITodosState, TTodosActionTypes } from './todos-types';

export interface IRootState {
  todos: ITodosState;
}

export type TActionTypes = TTodosActionTypes;
