import {FilterModel} from "../models/filter.model";

export const filtersObjectArray: FilterModel[] = [
  {
    type: 'text',
    name: 'Product Name',
    field: 'name',
    value: ''
  },
  {
    type: 'text',
    name: 'Category',
    field: 'category',
    value: ''
  },
  {
    type: 'number',
    name: 'Price',
    field: 'price',
    value: ''
  },
  {
    type: 'number',
    name: 'Count',
    field: 'count',
    value: ''
  }
];
