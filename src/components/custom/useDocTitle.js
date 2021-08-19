import {useEffect} from 'react'

/**
 * By seperating hook code from the component, same logic can be applied in
 * multiple components 
 */
function useDocTitle(count) {
    useEffect(() => {
        document.title = 'Count - ' + count
    }, [count])
}

export default useDocTitle
