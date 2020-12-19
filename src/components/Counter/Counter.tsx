import React from "react"
import CounterInput from './CounterInput/CounterInput';
import CounterButton from './CounterButton/CounterButton';
import classes from "./Counter.module.scss"

export type CounterPropsType = {

}


const Counter:React.FC<CounterPropsType> = () => {
    return (
    <div className={classes.counter}>
        <CounterInput/>
        <div className={classes.buttons}>
            <CounterButton/>
            <CounterButton/>
        </div>
    </div>
    )
}

export default Counter