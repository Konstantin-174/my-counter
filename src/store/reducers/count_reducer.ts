import {AllActionTypes, ChangeCountActionType, ResetCountActionType} from '../store';

const initialState = {
    count: 0
}

export const countReducer = (state = initialState, action: AllActionTypes) => {
    switch (action.type) {
        case "CHANGE-COUNT":
            state.count = action.newCount + 1
            return state
        case "RESET-COUNT":
            if (state.count > 0) {
                state.count = 0
            }
            return state
        default:
            return state
    }
}

// === ACTION CREATORS ===
export const changeCountAC = (newCount: number): ChangeCountActionType => {
    return {
        type: "CHANGE-COUNT",
        newCount: newCount
    }
}

export const resetCountAC = (count: number): ResetCountActionType => {
    return {
        type: "RESET-COUNT",
        count: count
    }
}
// === / ACTION CREATORS ===