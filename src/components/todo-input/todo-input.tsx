import React from 'react';
import { Text, FormLabel, Input, Box } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import {
  EFormFields,
  IFormValues,
} from '../pages/main-page/main-page-prop-types';

const TodoInput: React.FC = () => {
  const {
    handleChange,
    values: { todo },
    errors: { todo: todoError },
  } = useFormikContext<IFormValues>();

  return (
    <Box w="100%" mb={4} maxW="600px">
      <FormLabel>New record:</FormLabel>
      <Input
        name={EFormFields.TODO}
        placeholder="Todo"
        value={todo}
        onChange={handleChange}
        isInvalid={Boolean(todoError)}
      />
      {Boolean(todoError) && (
        <Text color="red" fontSize={'xs'} position={'absolute'}>
          {todoError}
        </Text>
      )}
    </Box>
  );
};

export default TodoInput;
