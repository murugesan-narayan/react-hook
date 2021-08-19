import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    post: {},
    error: ''
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'success':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'failure':
            // console.log(action)
            return {
                loading: false,
                post: {},
                error: action.error
            }
        default: return state
    }
}

function DataFetching() {
    const [currentState, dispatch] = useReducer(reducer, initialState)
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => dispatch({
            type: 'success',
            payload: response.data,
        })).catch(error => {
            dispatch({
            type: 'failure',
            error: error.message
        })})
    }, [])
    const {loading, post, error} = currentState
    return (
        <div>
            {loading ? 'Loading...': post.title}
            {error ? error: null}
        </div>
    )
}

export default DataFetching
