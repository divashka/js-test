import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { State, AppThunkDispatch } from '../types/types';

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;