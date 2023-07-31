import React from 'react'

function ImageShow({image}) {
    return (
        <>
            <div>
                <img src={image.urls.small} style={{
                width: '100%',
                marginBottom: '10px',
            }}/>
            </div>
        </>
    )
}

export default ImageShow