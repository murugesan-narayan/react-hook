import React,{useEffect,useRef} from 'react'

function FocusInput() {
    const inputRef = useRef(null)
    /**
     * this brings focus to the input element while calling initial render
     */
    useEffect(()=>{
        inputRef.current.focus()
    }, [])
    return (
        <div>
            Text: <input ref={inputRef} type='text' />
        </div>
    )
}

export default FocusInput
