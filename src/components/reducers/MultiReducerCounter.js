import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment': return state + 1
        case 'decrement': return state - 1
        case 'reset': return initialState
        default: return state
    }
}
function MultiReducerCounter() {
    const [count1, dispatch1] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count1: {count1}</div>
            <button onClick={()=>dispatch1('increment')}>Increment</button>
            <button onClick={()=>dispatch1('decrement')}>Decrement</button>
            <button onClick={()=>dispatch1('reset')}>Reset</button>

            <div>Count2: {count2}</div>
            <button onClick={()=>dispatch2('increment')}>Increment</button>
            <button onClick={()=>dispatch2('decrement')}>Decrement</button>
            <button onClick={()=>dispatch2('reset')}>Reset</button>
        </div>
    )
}

export default MultiReducerCounter
