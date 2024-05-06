import { State } from "../../types/types";
import { SliceNameSpace } from "../../const/const";

export const getQuestions = (state: State) => state[SliceNameSpace.Test].questions;

export const getOneQuestion = (state: State) => state[SliceNameSpace.Test].question;

