import React,{useState, useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentContainer() {
    const [age, setAge] =  useState(21)
    const [salary, setSalary] =  useState(21000)
    /**
     * useCallback only changes the method if age changes
     * so element which uses incrementAge will not rerender if not changed
     */

    const incrementAge = useCallback(
        () => {
            setAge(prevAge=>prevAge+1)
        },
        // eslint-disable-next-line
        [age],
    )
    /**
     * useCallback only changes the method if salary changes
     * so element which uses incrementSalary will not rerender if not changed
     */
    const incrementSalary = useCallback(
        () => {
            setSalary(prevSalary=>prevSalary+1000)
        },
        // eslint-disable-next-line
        [salary],
    )

    return (
        <div>
         <Title />
         <Count text='Age' count={age} />
         <Button handleClick={incrementAge}>Increment Age</Button>
         <Count text='Salary' count={salary} />
         <Button handleClick={incrementSalary}>Increment Salary</Button>   
        </div>
    )
}

export default ParentContainer
