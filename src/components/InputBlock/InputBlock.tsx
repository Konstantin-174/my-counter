import local from './InputBlock.module.scss';
import React from 'react';
import CounterButton from '../Counter/CounterButton/CounterButton';

export const InputBlock = () => {
    return (
        <section className={local.inputBlockWrap}>
            <div className={local.inputArea}>
                <div className={local.inputItem}>
                    <div className={local.inputTitle}>
                        max value
                    </div>
                    <Input/>
                </div>
                <div className={local.inputItem}>
                    <div className={local.inputTitle}>
                        start value
                    </div>
                    <Input />
                </div>
            </div>
            <div className={local.btn}>
                <CounterButton title="set"/>
            </div>
        </section>
    )
}

const Input = () => {
    return (
        <div className={local.input}>
            <div className={local.dec}>-</div>
            <input type="text"
                   placeholder="Enter your value"
            />
            <div className={local.inc}>+</div>
        </div>
    )
}

