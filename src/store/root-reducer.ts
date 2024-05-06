import { combineReducers } from '@reduxjs/toolkit';
import { SliceNameSpace } from '../const/const';
import { testReducer } from './test-slice/test-slice';

export const rootReducer = combineReducers({
  [SliceNameSpace.Test]: testReducer.reducer,
});