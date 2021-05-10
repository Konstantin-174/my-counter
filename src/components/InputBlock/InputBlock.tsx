import local from './InputBlock.module.scss';
import React from 'react';
import CounterButton from '../Counter/CounterButton/CounterButton';
import {AllActionTypes} from '../../store/store';
import {DecSetMaxValueAC, IncSetMaxValueAC} from '../../store/reducers/maxValue_reducer';
import {DecSetStartValueAC, IncSetStartValueAC} from '../../store/reducers/startValue_reducer';

type InputBlockPropsType = {
    dispatch: (action: AllActionTypes) => void
    maxValue: number
    startValue: number
}

type InputType = {
    newValue: number
    incHandler: () => void
    decHandler: () => void
}

export const InputBlock: React.FC<InputBlockPropsType> = ({maxValue, startValue, dispatch}) => {

    const alertMessage = () => {
        alert('Hello!')
    }

    const incMaxValue = () => {
        dispatch(IncSetMaxValueAC(maxValue))
    }

    const decMaxValue = () => {
        dispatch(DecSetMaxValueAC(maxValue))
    }

    const incStartValue = () => {
        dispatch(IncSetStartValueAC(startValue))
    }

    const decStartValue = () => {
        dispatch(DecSetStartValueAC(startValue))
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
                           newValue={maxValue}/>
                </div>
                <div className={local.inputItem}>
                    <div className={local.inputTitle}>
                        start value
                    </div>
                    <Input decHandler={decStartValue}
                           incHandler={incStartValue}
                           newValue={startValue}/>
                </div>
            </div>
            <div className={local.btn}>
                <CounterButton changes={alertMessage}
                               title="set"/>
            </div>
        </section>
    )
}

const Input: React.FC<InputType> = ({decHandler, incHandler, newValue}) => {

    return (
        <div className={local.input}>
            <div className={local.dec}
                 tabIndex={0}
                 onClick={decHandler}>-</div>
            <input value={newValue}
                   type="text"
            />
            <div className={local.inc}
                 tabIndex={0}
                 onClick={incHandler}>+</div>
        </div>
    )
}

