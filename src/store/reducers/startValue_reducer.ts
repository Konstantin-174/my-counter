import {AllActionTypes, DecSetStartValueActionType, IncSetStartValueActionType} from '../store';

const initialState = {
    startValue: 0
}

export const startValueReducer = (state = initialState, action: AllActionTypes) => {

    switch (action.type) {
        case 'INC-SET-START-VALUE':
            state.startValue = action.newValue + 1
            return state
        case 'DEC-SET-START-VALUE':
            if (state.startValue > 0) {
                state.startValue = action.newValue - 1
            }
            return state
        default:
            return state
    }
}

// === ACTION CREATORS ===
export const IncSetStartValueAC = (value: number): IncSetStartValueActionType => {
    return {
        type: 'INC-SET-START-VALUE',
        newValue: value
    }
}

export const DecSetStartValueAC = (value: number): DecSetStartValueActionType => {
    return {
        type: 'DEC-SET-START-VALUE',
        newValue: value
    }
}
// === / ACTION CREATORS ===