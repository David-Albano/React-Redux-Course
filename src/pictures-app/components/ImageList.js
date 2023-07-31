import React from 'react'
import ImageShow from './ImageShow'

function ImageList({imageList}) {
    return (
        <div style={{
            display:'grid',
            gridTemplateColumns: 
                'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
        }}>
            {imageList.map((image, index) => (
                <ImageShow key={index} image={image} />
            ))}
        </div>
    )
}

export default ImageList