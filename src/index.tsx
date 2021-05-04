import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {store} from './store/store';

export const rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(rerender)
rerender()
