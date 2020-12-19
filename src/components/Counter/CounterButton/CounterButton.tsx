import React from 'react'
import classes from './CounterButton.module.scss'

export type CounterButtonPropsType = {
    disabled: boolean
    change: () => void
}


const CounterButton: React.FC<CounterButtonPropsType> = ({change,
                                                             disabled,
                                                             children}) => {
    return (
        <button onClick={change}
                className={classes.btn}
                disabled={disabled}>
            {children}
        </button>
    )
}

export default CounterButton