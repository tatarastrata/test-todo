import { EFilters } from '../../filters/filters-prop-types';

// eslint-disable-next-line no-shadow
export enum EFormFields {
  TODO = 'todo',
  FILTER = 'filter',
}

export interface IFormValues {
  todo: string;
  filter: EFilters;
}
