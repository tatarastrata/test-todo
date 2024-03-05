import React, { ReactElement } from 'react';
import { EFormFields, IFormValues } from './main-page-prop-types';
import { Box, Divider, VStack } from '@chakra-ui/react';
import { Filters, TodoInput, TodoList } from '../..';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../redux/actions/todos-actions';
import { EFilters } from '../../filters/filters-prop-types';
import * as Yup from 'yup';
import { RECORD_LENGTH } from '../../../constants';

const FormSchema = Yup.object().shape({
  todo: Yup.string().max(RECORD_LENGTH, 'Too long entry 😿'),
});

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formValues: IFormValues): void => {
    dispatch(addTodo(formValues.todo));
  };
  return (
    <Box p={6}>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
        initialValues={{
          [EFormFields.TODO]: '',
          [EFormFields.FILTER]: EFilters.ALL,
        }}
      >
        {(): ReactElement => (
          <Form>
            <VStack
              spacing={4}
              width={'100%'}
              maxW="600px"
              align="flex-start"
              alignSelf={'center'}
              m="0 auto"
            >
              <TodoInput />
              <Filters />
              <Divider />
              <TodoList />
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default MainPage;
