import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { QuestionT } from '../../types/types';
import { APIRoute } from '../../const/const';
import { State } from '../../types/types';
import { AppThunkDispatch } from '../../types/types';

export const fetchQuestionsAction = createAsyncThunk<QuestionT[], undefined, {
  dispatch: AppThunkDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'test/fetchQuestions',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<QuestionT[]>(APIRoute.Test);
    return data;
  },
);

export const fetchOneQuestionAction = createAsyncThunk<QuestionT, number, {
  dispatch: AppThunkDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'test/fetchOneQuestion',
  async (id, { extra: api }) => {
    const { data } = await api.get<QuestionT>(`${APIRoute.Test}/${id}`);
    return data;
  },
);
