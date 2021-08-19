import React,{useState, useEffect, useRef, useCallback} from 'react'


function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    const callSetTimer = useCallback(
        () => {
            intervalRef.current = setInterval(()=>{
                setTimer(prevTimer=>prevTimer+1)
            }, 5000)
        },
        [],
    )
    
    useEffect(()=>{
        callSetTimer()
        return () => clearInterval(intervalRef.current)
    }, [callSetTimer])
    return (
        <div>
            Hook Timer: {timer}
            <button onClick={()=>clearInterval(intervalRef.current)}>Stop</button>
            <button onClick={callSetTimer}>Re-Start</button>
        </div>
    )
}

export default HookTimer
