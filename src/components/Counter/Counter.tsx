import React from 'react'
import CounterInput from './CounterInput/CounterInput';
import CounterButton from './CounterButton/CounterButton';
import local from './Counter.module.scss'

export type CounterPropsType = {
    count: number
    incrementCounter: () => void
    resetCounter: () => void
}


const Counter: React.FC<CounterPropsType> = ({
                                                 resetCounter,
                                                 incrementCounter,
                                                 count
                                             }) => {
    return (
        <section className={local.counter}>
            <CounterInput count={count}/>
            <div className={local.btns}>
                <CounterButton title="INC"
                               change={incrementCounter}
                               disabled={count >= 5}
                />
                <CounterButton title="RESET"
                               change={resetCounter}
                               disabled={count === 0}
                />
            </div>
        </section>
    )
}

export default Counter