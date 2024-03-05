// store entity
export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

// store state
export interface ITodosState {
  todos: {
    [key: string]: ITodo;
  };
}

// action literals
// eslint-disable-next-line no-shadow
export enum ETodosActions {
  ADD_TODO = 'ADD_TODO',
  CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS',
}

// actions types
export interface IAddTodoAction {
  type: ETodosActions.ADD_TODO;
  payload: ITodo;
}

export interface IChangeTodoStatus {
  type: ETodosActions.CHANGE_TODO_STATUS;
  payload: string;
}

export type TTodosActionTypes = IAddTodoAction | IChangeTodoStatus;
