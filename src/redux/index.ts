import { combineReducers, configureStore } from '@reduxjs/toolkit';
import menu from './reducers/menu';

const rootReducer = combineReducers({ menu });

export const store = configureStore({ reducer: rootReducer });