import React from "react"
import classes from "./CounterInput.module.scss"

export type CounterInputPropsType = {

}


const CounterInput:React.FC<CounterInputPropsType> = () => {
    return (
        <div className={classes.input}>
            0
        </div>
    )
}

export default CounterInput