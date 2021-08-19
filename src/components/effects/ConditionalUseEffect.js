import React,{useState, useEffect} from 'react'

function ConditionalUseEffect() {
    const [count, setCount] = useState(0)
    const [update, setUpdate] = useState(false)
    /**
     * Calls render of the component for the first time after that
     * only when there is a change in the update property
     */
    useEffect(()=>document.title=count , [update])
    
    return (
        <div>
            <button style={{backgroundColor: 'yellow'}} 
                    onClick={() => setUpdate(prevUpdate => !prevUpdate)}>
                        Click me to show the latest count in document title</button>
            <button onClick={()=> setCount(preC=>preC+1)}>Clicked {count} times</button>
        </div>
    )
}

export default ConditionalUseEffect
