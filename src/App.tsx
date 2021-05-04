import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import {InputBlock} from './components/InputBlock/InputBlock';
import {StoreType} from './store/store';

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {

    const state = props.store.getState();

    return (
        <div className="App">
            <InputBlock maxValue={state.maxValue}
                        startValue={state.startValue}
                        dispatch={props.store.dispatch.bind(props.store)}
            />
            <Counter count={state.count}
                     dispatch={props.store.dispatch.bind(props.store)}
            />
        </div>
    );
}

export default App;
