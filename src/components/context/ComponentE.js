import React from 'react'
import {UserConsumer} from './UserContext'
import { ChannelContext } from './ChannelContext'
/**
 * This component uses render properties mehtod to get context
 */
function ComponentE() {
    return (
        <div>From Component E: 
            <UserConsumer>{
                user => 
                <ChannelContext.Consumer>
                    {channel => user+' from '+channel}
                </ChannelContext.Consumer>
            }
            </UserConsumer>
        </div>
    )
}

export default ComponentE
