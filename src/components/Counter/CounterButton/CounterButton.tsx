import React from 'react'
import classes from './CounterButton.module.scss'

export type CounterButtonPropsType = {
    disabled?: boolean
    changes: () => void
    title: string
}


const CounterButton: React.FC<CounterButtonPropsType> = ({changes, disabled, title}) => {

    return (
        <button onClick={changes}
                className={classes.btn}
                disabled={disabled}>
            {title}
        </button>
    )
}

export default CounterButton