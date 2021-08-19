import React, {useReducer} from 'react'

const initialState = {
    count1: 0,
    count2: 0
}

const reducer = (state, action) => {
    switch(action.type){
        case 'increment1': return {...state, count1: state.count1 + action.value}
        case 'decrement1': return {...state, count1: state.count1 - action.value}
        case 'increment2': return {...state, count2: state.count2 + action.value}
        case 'decrement2': return {...state, count2: state.count2 - action.value}
        case 'reset': return initialState
        default: return state
    }
}

function ReducerWithComplexState() {
    const [countState, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count1: {countState.count1}</div>
            <button onClick={()=>dispatch({type:'increment1', value: 1})}>Increment</button>
            <button onClick={()=>dispatch({type:'increment1', value: 5})}>Increment 5</button>
            <button onClick={()=>dispatch({type:'decrement1', value: 1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'decrement1', value: 5})}>Decrement 5</button>
            <div>Count2: {countState.count2}</div>
            <button onClick={()=>dispatch({type:'increment2', value: 1})}>Increment</button>
            <button onClick={()=>dispatch({type:'increment2', value: 5})}>Increment 5</button>
            <button onClick={()=>dispatch({type:'decrement2', value: 1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'decrement2', value: 5})}>Decrement 5</button><br />
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default ReducerWithComplexState
