import React,{useState} from 'react'
import useDocTitle from './useDocTitle'

function DocTitle() {
    const [count, setCount] = useState(0)
    useDocTitle(count)
    return (
        <div>
            <button 
            onClick={()=>setCount(prevCount=>prevCount+1)}>
                Count - {count}</button>
        </div>
    )
}

export default DocTitle
