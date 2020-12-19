import React from "react"
import classes from "./CounterButton.module.scss"

export type CounterButtonPropsType = {

}


const CounterButton:React.FC<CounterButtonPropsType> = ({children}) => {
    return (
        <button className={classes.btn}>
            {children}
        </button>
    )
}

export default CounterButton