import { ETodosActions, TTodosActionTypes } from '../types/todos-types';
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (text: string): TTodosActionTypes => ({
  type: ETodosActions.ADD_TODO,
  payload: { text, id: uuidv4(), completed: false },
});

export const changeTodoStatus = (id: string): TTodosActionTypes => ({
  type: ETodosActions.CHANGE_TODO_STATUS,
  payload: id,
});
