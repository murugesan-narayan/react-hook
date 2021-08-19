import React from 'react'

function Title() {
    console.log('From Title...')
    return (
        <div>
         UseCallBack Demo   
        </div>
    )
}

export default React.memo(Title)
