import React,{useState, useEffect} from 'react'

function CleanUpUseEffect() {
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

        /**
         * This retrun function will get called when the component will unmount
         */
        return () => { window.removeEventListener('mousemove', updateMouseLocation) }
    }, [])



    return (
        <div>
            Mouse Location: [{X}, {Y}]
        </div>
    )
}

function CleanUpUseEffectDemo() {
    const [show, setShow] = useState(true)
    const val = show ? 'Click Me to Hide' : 'Click Me to Show'
    return (
        <div>
            { show && <CleanUpUseEffect />}
            <button onClick={()=> setShow(prevShow => !prevShow) }>{val}</button>
        </div>
    )
}

//export default CleanUpUseEffect
export default CleanUpUseEffectDemo
