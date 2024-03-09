/* eslint-disable prettier/prettier */
import { createStore } from 'redux';
import counterReducer from './slice';

const store = createStore(counterReducer);

export default store;
