import React, { useState, useEffect } from 'react'

function IncorrectUseEffectDep() {
    const [count, setCount] = useState(0)

    //useEffect can also be seperated for each state if we wanted clear separation.
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        console.log('use effect called')
        return () => clearInterval(interval)
    }, [])  //if you add the count here it will call every time the count is increased
            //If you dependent on some property inside useEffect then add that insided 
            //dependency array so that it will be call whenever there is a change on that.

    /**
     * If we use setCount(count+1) -> will not call render for every count changes
     * use setCount(prevCount=>...) 
     */
    const tick = () => setCount(prevCount => prevCount + 1)
    
    return (
        <div>
            Count: {count}
        </div>
    )
}

export default IncorrectUseEffectDep
