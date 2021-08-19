import React,{useEffect, useState} from 'react'
import axios from 'axios'
function FetchDataUseEffect() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [fetchId, setFetchId] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${fetchId}`)
        .then(res=> {
            console.log(res)
            setPost(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }, [fetchId])
    
    const clickHandler = () => {
        setFetchId(id)
    }

    return (
        <div>
            <input type='text'value={id} onChange={e=>setId(e.target.value)} />
            <button onClick={clickHandler}>Fetch</button>
            <ul>
                {
                    <li key={post.id}>{post.title}</li>
                }
            </ul>
        </div>
    )
}

export default FetchDataUseEffect
