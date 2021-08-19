import React from 'react'

function Count({count, text}) {
    console.log('From Count....', text)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(Count)
