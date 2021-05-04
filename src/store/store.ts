import {rerender} from '../index';

// === STATE TYPES ===
export type StateType = {
    maxValue: number
    startValue: number
    count: number
}

export type StoreType = {
    _state: StateType
    _render: () => void
    getState: () => StateType
    subscribe: ( callback: () => void) => void
    dispatch: (action: ChangeCountActionType | ResetCountActionType) => void
}

// === / STATE TYPES ===

// === ACTION TYPES ===
export type ChangeCountActionType = {
    type: "CHANGE-COUNT"
    newCount: number
}

export type ResetCountActionType = {
    type: "RESET-COUNT",
    count: number
}
// === / ACTION TYPES ===

export const store: StoreType = {
    _state: {
        maxValue: 0,
        startValue: 0,
        count: 0
    },
    _render() {
        rerender();
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._render = callback
    },
    dispatch(action) {
        if (action.type === "CHANGE-COUNT") {
            this._state.count = action.newCount + 1
            this._render()
        } else if (action.type === "RESET-COUNT") {
            if (this._state.count > 0) {
                this._state.count = 0
            }
            this._render()
        }
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
