import { ThunkDispatch } from '@reduxjs/toolkit';
import { createAPI } from '../services/services';
import { Action } from 'redux';
import { store } from '../store/store';

export type QuestionSliceT = {
 questions: QuestionT[],
 question: QuestionT | null
};

export type QuestionT = {
 id: number,
 question: string,
 code: string,
 answers: string[],
 correct_answer: number
}

export type State = ReturnType<typeof store.getState>;

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;