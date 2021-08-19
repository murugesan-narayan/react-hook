import React,{useState,useMemo} from 'react'

function MemoCounter() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    const incrementCountOne = () => {
        setCountOne(prevCount=>prevCount+1)
    }
    /**
     * caches th result of the given function through useMemo and
     * update the cache only when countOne is changed.
     * Note: useCallBack caches the function but useMemo caches the result
     */
    const isCountOneEven = useMemo( () => {
        return countOne % 2 === 0
    }, [countOne])
    
    const incrementCountTwo = () => {
        setCountTwo(prevCount=>prevCount+1)
    }

    /**
     * caches th result of the given function through useMemo and
     * update the cache only when countTwo is changed.
     */
    const isCountTwoEven = useMemo( () => {
        return countTwo % 2 === 0
    }, [countTwo])
    return (
        <div>
            <div>CountOne: {countOne} - {isCountOneEven ? 'Even':'Odd'}</div>
            <button onClick={incrementCountOne}>Increment Count One</button>
            <div>CountTwo: {countTwo} - {isCountTwoEven ? 'Even':'Odd'}</div>
            <button onClick={incrementCountTwo}>Increment Count Two</button>
        </div>
    )
}

export default MemoCounter
