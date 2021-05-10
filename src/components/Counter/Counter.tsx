import React from 'react'
import CounterInput from './CounterInput/CounterInput';
import CounterButton from './CounterButton/CounterButton';
import local from './Counter.module.scss'
import {ChangeCountActionType, ResetCountActionType} from '../../store/store';
import {changeCountAC, resetCountAC} from '../../store/reducers/count_reducer';

export type CounterPropsType = {
    count: number
    dispatch: (action: ChangeCountActionType | ResetCountActionType) => void
    maxValue: number
}


const Counter: React.FC<CounterPropsType> = ({dispatch, count, maxValue}) => {

    const addNewCount = () => {
        dispatch(changeCountAC(count))
    }

    const resetCount = () => {
        dispatch(resetCountAC(count))
    }

    return (
        <section className={local.counter}>
            <CounterInput count={count}
                          maxValue={maxValue}
            />
            <div className={local.btns}>
                <CounterButton changes={addNewCount}
                               title="inc"
                               disabled={count >= maxValue}
                />
                <CounterButton title="reset"
                               changes={resetCount}
                               disabled={count === 0}
                />
            </div>
        </section>
    )
}

export default Counter