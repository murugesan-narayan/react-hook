import React,{useContext} from 'react'
import ComponentE from './ComponentE'
import UserContext from './UserContext'
import ChannelContext from './UserContext'

/**
 * This component uses useContext method to get context
 */
function ComponentD() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            <div>From Component D: {user} from {channel}</div>
            <ComponentE />
        </div>
    )
}

export default ComponentD
