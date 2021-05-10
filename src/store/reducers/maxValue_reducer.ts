import {AllActionTypes, DecSetMaxValueActionType, IncSetMaxValueActionType} from '../store';

const initialState = {
    maxValue: 0
}

export const maxValueReducer = (state = initialState, action: AllActionTypes) => {
    switch (action.type) {
        case 'INC-SET-MAX-VALUE':
            state.maxValue = action.newValue + 1
            return state
        case 'DEC-SET-MAX-VALUE':
            if (state.maxValue > 0) {
                state.maxValue = action.newValue - 1
            }
            return state
        default:
            return state
    }
}

// === ACTION CREATORS ===
export const IncSetMaxValueAC = (value: number): IncSetMaxValueActionType => {
    return {
        type: 'INC-SET-MAX-VALUE',
        newValue: value
    }
}

export const DecSetMaxValueAC = (value: number): DecSetMaxValueActionType => {
    return {
        type: 'DEC-SET-MAX-VALUE',
        newValue: value
    }
}
// === / ACTION CREATORS ===