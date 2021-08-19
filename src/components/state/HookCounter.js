import React, {useState} from 'react'

function HookCounter() {
    const iCount = 0
    const [count, setCount] = useState(iCount)

    return (
        <div>
            Hook Counter: {count}<br/>
            <button onClick={() => setCount( (prevCount) =>prevCount+1)}>Increment</button>
            <button onClick={() => setCount( (prevCount) =>prevCount+5)}>Increment 5</button>
            <button onClick={() => setCount( (prevCount) =>prevCount-1)}>Decrement</button>
            <button onClick={() => setCount( () =>iCount)}>Reset</button>          
        </div>
    )
}

export default HookCounter
