import React, { useState, createContext } from "react"
import Counter from "./Counter"

// Create context for count, default to 0
export const CountCtx = createContext(0)

function App() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(2)

    return (
        <div>
            <CountCtx.Provider value={count2}>
                <Counter />
                <button onClick={() => setCount(count + 1)}>+1</button>
            </CountCtx.Provider>
        </div>
    )
}

export default App