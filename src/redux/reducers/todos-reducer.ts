import {
  ETodosActions,
  ITodosState,
  TTodosActionTypes,
} from '../types/todos-types';

const initialState: ITodosState = {
  todos: {},
};

const todosReducer = (
  state: ITodosState = initialState,
  action: TTodosActionTypes
): ITodosState => {
  switch (action.type) {
    case ETodosActions.ADD_TODO: {
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.id]: action.payload,
        },
      };
    }
    case ETodosActions.CHANGE_TODO_STATUS: {
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload]: {
            ...state.todos[action.payload],
            completed: !state.todos[action.payload].completed,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;
