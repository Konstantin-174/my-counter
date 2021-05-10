import {combineReducers, createStore } from 'redux';
import {countReducer} from './reducers/count_reducer';
import {maxValueReducer} from './reducers/maxValue_reducer';
import {startValueReducer} from './reducers/startValue_reducer';

// === STATE TYPES ===
export type StateType = {
    maxValue: number
    startValue: number
    count: number
}

export type StoreType = typeof store
// === / STATE TYPES ===

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
    newValue: number
}

export type DecSetMaxValueActionType = {
    type: "DEC-SET-MAX-VALUE",
    newValue: number
}

export type IncSetStartValueActionType = {
    type: "INC-SET-START-VALUE"
    newValue: number
}

export type DecSetStartValueActionType = {
    type: "DEC-SET-START-VALUE",
    newValue: number
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
