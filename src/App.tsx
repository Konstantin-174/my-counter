import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';


function App() {

    const [count, setCount] = useState<number>(0)

    const incrementCounter = () => {
        if(count >= 0 && count < 5) {
            setCount(count + 1)
        } else if(count >= 5) {
            return
        }
    }

    const resetCounter = () => {
        if (count > 0) {
            setCount(0)
        } else return
    }

    return (
        <div className="App">
            <Counter count={count}
                     incrementCounter={incrementCounter}
                     resetCounter={resetCounter}
            />
        </div>
    );
}

export default App;
