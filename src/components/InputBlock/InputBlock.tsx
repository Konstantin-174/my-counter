import local from './InputBlock.module.scss';
import React from 'react';
import CounterButton from '../Counter/CounterButton/CounterButton';
import {
    ChangeCountActionType,
    IncSetMaxValueAC,
    IncSetMaxValueActionType,
    ResetCountActionType,
    DecSetMaxValueActionType,
    DecSetMaxValueAC
} from '../../store/store';

type InputBlockPropsType = {
    disabled?: boolean
    dispatch: (action: ChangeCountActionType |
        ResetCountActionType |
        IncSetMaxValueActionType |
        DecSetMaxValueActionType) => void
    maxValue: number
    startValue: number
    // count: number
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
                    <Input decHandler={() => {}}
                           incHandler={() => {}}
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

