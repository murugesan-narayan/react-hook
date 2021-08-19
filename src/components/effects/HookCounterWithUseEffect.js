import React,{useState, useEffect} from 'react'

function HookCounterWithUseEffect() {
    const [count, setCount] = useState(0)
    /**
     * Calls every render of the component
     */
    useEffect(()=>document.title=count)
    
    return (
        <div>
            <button onClick={()=> setCount(preC=>preC+1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounterWithUseEffect
