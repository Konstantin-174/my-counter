import React from 'react'
import classes from './CounterButton.module.scss'

export type CounterButtonPropsType = {
    disabled?: boolean
    change?: () => void
    title: string
}


const CounterButton: React.FC<CounterButtonPropsType> = ({change,
                                                             disabled,
                                                            title}) => {
    return (
        <button onClick={change}
                className={classes.btn}
                disabled={disabled}>
            {title}
        </button>
    )
}

export default CounterButton