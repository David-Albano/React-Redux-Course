import React from 'react'
import ImageShow from './ImageShow'

function ImageList({imageList}) {
    return (
        <>
            {imageList.map((image, index) => (
                <ImageShow key={index} image={image} />
            ))}
        </>
    )
}

export default ImageList