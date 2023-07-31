import React from 'react'

function ImageShow({image}) {
    return (
        <>
            <div style={{
                width: '12rem',
                height: '12rem',
                border: '2px solid red',
                overflow: 'hidden',
                textAlign: 'center',
            }}>
                <h3>{image.alt_description}</h3>
                <img style={{maxWidth: '100%', maxHeight: '100%',}} src={image.urls.full} />
            </div>
        </>
    )
}

export default ImageShow