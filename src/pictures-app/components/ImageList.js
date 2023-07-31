import React from 'react'
import ImageShow from './ImageShow'

function ImageList({imageList}) {
    return (
        <div style={{
            // display:'grid',
            // gridTemplateColumns: 
            //     'repeat(auto-fit, minmax(250px, 1fr))',
            marginTop: '2rem',
            columns: '6 200px',
            columnGap: '10px',
        }}>
            {imageList.map((image) => (
                <ImageShow key={image.id} image={image} />
            ))}
        </div>
    )
}

export default ImageList