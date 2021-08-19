import React,{useState, useEffect} from 'react'

function InitialRenderOnlyUseEffect() {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)
    
    const updateMouseLocation = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    /**
     * Calls render of the component only for the first time after that
     * does not call. It is simlar to class component
     */
    useEffect(()=> {
        window.addEventListener('mousemove', updateMouseLocation)
    }, [])



    return (
        <div>
            Mouse Location: [{X}, {Y}]
        </div>
    )
}

export default InitialRenderOnlyUseEffect
