import {combineReducers, createStore } from 'redux';
import {countReducer} from './reducers/count_reducer';
import {maxValueReducer} from './reducers/maxValue_reducer';
import {startValueReducer} from './reducers/startValue_reducer';

// === STORE TYPES ===
export type StoreType = typeof store
// === / STORE TYPES ===

// === ACTION TYPES ===
export type AllActionTypes = ChangeCountActionType
    | ResetCountActionType
    | IncSetMaxValueActionType
    | DecSetMaxValueActionType
    | IncSetStartValueActionType
    | DecSetStartValueActionType

export type ChangeCountActionType = {
    type: "CHANGE-COUNT"
    newCount: number
}

export type ResetCountActionType = {
    type: "RESET-COUNT",
    count: number
}

export type IncSetMaxValueActionType = {
    type: "INC-SET-MAX-VALUE"
    newMaxValue: number
}

export type DecSetMaxValueActionType = {
    type: "DEC-SET-MAX-VALUE",
    newMaxValue: number
}

export type IncSetStartValueActionType = {
    type: "INC-SET-START-VALUE"
    newStartValue: number
}

export type DecSetStartValueActionType = {
    type: "DEC-SET-START-VALUE",
    newStartValue: number
}
// === / ACTION TYPES ===

// === CREATE STORE ===
const reducers = combineReducers({
    countReducer,
    maxValueReducer,
    startValueReducer
})

export const store = createStore(reducers);
// === / CREATE STORE ===
