import React from 'react';
import { ITodoEntryPropTypes } from './todo-entry-prop-types';
import { Badge, HStack, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { changeTodoStatus } from '../../redux/actions/todos-actions';

const TodoEntry: React.FC<ITodoEntryPropTypes> = ({ todo }) => {
  const { id, text, completed } = todo;
  const dispatch = useDispatch();

  const handleChangeStatus = (todoId: string): void => {
    dispatch(changeTodoStatus(todoId));
  };

  return (
    <HStack
      justify={'space-between'}
      onClick={(): void => handleChangeStatus(id)}
    >
      <Text as={completed ? 's' : 'p'}>{text}</Text>
      <Badge colorScheme={completed ? 'green' : 'red'}>
        {completed ? 'completed' : 'current'}
      </Badge>
    </HStack>
  );
};

export default TodoEntry;
