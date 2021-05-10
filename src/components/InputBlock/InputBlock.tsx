import local from './InputBlock.module.scss';
import React from 'react';
import CounterButton from '../Counter/CounterButton/CounterButton';
import {AllActionTypes} from '../../store/store';
import {DecSetMaxValueAC, IncSetMaxValueAC} from '../../store/reducers/maxValue_reducer';
import {DecSetStartValueAC, IncSetStartValueAC} from '../../store/reducers/startValue_reducer';

type InputBlockPropsType = {
    disabled?: boolean
    dispatch: (action: AllActionTypes) => void
    maxValue: number
    startValue: number
}

type InputType = {
    newValue: number
    incHandler: () => void
    decHandler: () => void
}

export const InputBlock = (props: InputBlockPropsType) => {

    const alertMessage = () => {
        alert('Hello!')
    }

    const incMaxValue = () => {
        props.dispatch(IncSetMaxValueAC(props.maxValue))
    }

    const decMaxValue = () => {
        props.dispatch(DecSetMaxValueAC(props.maxValue))
    }

    const incStartValue = () => {
        props.dispatch(IncSetStartValueAC(props.startValue))
    }

    const decStartValue = () => {
        props.dispatch(DecSetStartValueAC(props.startValue))
    }

    return (
        <section className={local.inputBlockWrap}>
            <div className={local.inputArea}>
                <div className={local.inputItem}>
                    <div className={local.inputTitle}>
                        max value
                    </div>
                    <Input decHandler={decMaxValue}
                           incHandler={incMaxValue}
                           newValue={props.maxValue}/>
                </div>
                <div className={local.inputItem}>
                    <div className={local.inputTitle}>
                        start value
                    </div>
                    <Input decHandler={decStartValue}
                           incHandler={incStartValue}
                           newValue={props.startValue}/>
                </div>
            </div>
            <div className={local.btn}>
                <CounterButton changes={alertMessage}
                               title="set"/>
            </div>
        </section>
    )
}

const Input = (props: InputType) => {

    return (
        <div className={local.input}>
            <div className={local.dec}
                 onClick={props.decHandler}>-</div>
            <input value={props.newValue}
                   type="text"
                   placeholder="Enter your value"
            />
            <div className={local.inc}
                 onClick={props.incHandler}>+
            </div>
        </div>
    )
}

