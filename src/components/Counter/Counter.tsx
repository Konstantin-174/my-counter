import React from 'react'
import CounterInput from './CounterInput/CounterInput';
import CounterButton from './CounterButton/CounterButton';
import classes from './Counter.module.scss'

export type CounterPropsType = {
    count: number
    incrementCounter: () => void
    resetCounter: () => void
}


const Counter: React.FC<CounterPropsType> = ({resetCounter,
                                                 incrementCounter,
                                                 count}) => {
    return (
        <div className={classes.counter}>
            <CounterInput count={count}/>
            <div className={classes.buttons}>
                <CounterButton change={incrementCounter}
                               disabled={count >= 5}
                >INC</CounterButton>
                <CounterButton change={resetCounter}
                               disabled={count === 0}
                >RESET</CounterButton>
            </div>
        </div>
    )
}

export default Counter