import React, {useState} from 'react'

function HookWithStateArray() {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems( (prevItems) => [...prevItems, {
            id: prevItems.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>List of Items<br/>
            <button onClick={addItem}>Add an Item</button>
            <ul>
                {
                    items.map(item=> <li key={item.id}>{item.value}</li> )
                }
            </ul>
        </div>
    )
}

export default HookWithStateArray
