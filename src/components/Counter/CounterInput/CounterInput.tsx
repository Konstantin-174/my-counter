import React from 'react'
import classes from './CounterInput.module.scss'

export type CounterInputPropsType = {
    count: number
}


const CounterInput: React.FC<CounterInputPropsType> = ({count}) => {
    return (
        <div className={classes.input}>
            {count}
        </div>
    )
}

export default CounterInput