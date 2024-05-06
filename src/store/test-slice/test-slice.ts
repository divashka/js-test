import { createSlice } from '@reduxjs/toolkit';
import { SliceNameSpace } from '../../const/const';
import { QuestionSliceT } from '../../types/types';
import { fetchQuestionsAction, fetchOneQuestionAction } from '../api-actions/api-actions';

const initialState: QuestionSliceT = {
  questions: [],
  question: null
};

export const testReducer = createSlice({
 name: SliceNameSpace.Test,
 initialState,
 reducers: {},
 extraReducers(builder) {
  builder
   .addCase(fetchQuestionsAction.fulfilled, (state, action) => {
    state.questions = action.payload;
   })
   .addCase(fetchOneQuestionAction.fulfilled, (state, action) => {
    state.question = action.payload;
   })
 }
});