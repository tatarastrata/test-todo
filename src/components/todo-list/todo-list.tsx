import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/types';
import TodoEntry from '../todo-entry';
import { List, ListItem } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { IFormValues } from '../pages/main-page/main-page-prop-types';
import { EFilters } from '../filters/filters-prop-types';

const TodoList: React.FC = () => {
  const todos = useSelector((state: IRootState) => state.todos.todos);
  const {
    values: { filter },
  } = useFormikContext<IFormValues>();

  const todosArray = useMemo(() => {
    const allTodos = Object.values(todos);

    switch (filter) {
      case EFilters.COMPLETED: {
        return allTodos.filter((todo) => todo.completed);
      }
      case EFilters.CURRENT: {
        return allTodos.filter((todo) => !todo.completed);
      }
      default: {
        return allTodos;
      }
    }
  }, [todos, filter]);

  return (
    <List w="100%" p={2} maxW="600px">
      {todosArray.map((todo) => (
        <ListItem key={todo.id}>
          <TodoEntry todo={todo} />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
