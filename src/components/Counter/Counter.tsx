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
            <CounterButton>INC</CounterButton>
            <CounterButton>RESET</CounterButton>
        </div>
    </div>
    )
}

export default Counter