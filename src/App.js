import React, { createContext, useReducer } from "react"
import Counter from "./Counter"
import reducer from './reducer';

// Create context for count, default to 0
export const CountCtx = createContext(0)
const initialState = {count: 0};

function init(initialState) {
  return initialState;
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState, init);

    return (
        <div>
            <CountCtx.Provider value={state.count}>
                <button onClick={() => dispatch({type: 'reset', payload: initialState})}>reset</button>
                <Counter />
                <button onClick={() => dispatch({type: 'increment'})}>+1</button>
                <button onClick={() => dispatch({type: 'decrement'})}>-1</button>
            </CountCtx.Provider>
        </div>
    )
}

export default App