import React from 'react'

function ImageShow({image}) {
    return (
        <>
            <div style={{
                width: '12rem',
                height: '12rem',
                border: '2px solid red'
            }}>
                {image}
            </div>
        </>
    )
}

export default ImageShow