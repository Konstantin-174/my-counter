import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import {InputBlock} from './components/InputBlock/InputBlock';
import {StoreType} from './store/store';


type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = ({store}) => {

    const state = store.getState();

    return (
        <div className="App">
            <InputBlock maxValue={state.maxValueReducer.maxValue}
                        startValue={state.startValueReducer.startValue}
                        dispatch={store.dispatch}
            />
            <Counter maxValue={state.maxValueReducer.maxValue}
                     count={state.countReducer.count}
                     dispatch={store.dispatch}
            />
        </div>
    );
}

export default App;
