import React, { ReactElement, useMemo } from 'react';
import { EFilters } from './filters-prop-types';
import { HStack, RadioGroup, Radio, FormControl } from '@chakra-ui/react';
import { useFormikContext, Field, FieldProps } from 'formik';
import {
  EFormFields,
  IFormValues,
} from '../pages/main-page/main-page-prop-types';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/types';

const Filters: React.FC = () => {
  const todos = useSelector((state: IRootState) => state.todos.todos);

  const todosLength = useMemo(() => {
    const todoArray = Object.values(todos);
    return {
      [EFilters.COMPLETED]: todoArray.filter((todo) => todo.completed).length,
      [EFilters.CURRENT]: todoArray.filter((todo) => !todo.completed).length,
      [EFilters.ALL]: todoArray.length,
    };
  }, [todos]);

  const {
    setFieldValue,
    values: { filter },
  } = useFormikContext<IFormValues>();

  const handleRadioChange = (value: EFilters): void => {
    setFieldValue(EFormFields.FILTER, value);
  };

  return (
    <Field name={EFormFields.FILTER}>
      {(fieldProps: FieldProps): ReactElement => (
        <FormControl>
          <RadioGroup
            {...fieldProps.field}
            name={EFormFields.FILTER}
            onChange={handleRadioChange}
            value={filter}
          >
            <HStack spacing={4}>
              <Radio size="sm" value={EFilters.COMPLETED}>{`completed (${
                todosLength[EFilters.COMPLETED]
              })`}</Radio>
              <Radio size="sm" value={EFilters.CURRENT}>{`current (${
                todosLength[EFilters.CURRENT]
              })`}</Radio>
              <Radio size="sm" value={EFilters.ALL}>{`all (${
                todosLength[EFilters.ALL]
              })`}</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
      )}
    </Field>
  );
};

export default Filters;
