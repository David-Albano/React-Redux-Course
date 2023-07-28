import React from 'react'

function ProfileCard({altImg, image, title, handle, description}) {
    return (
        <div className='card'>
            <div className='card-image'>
                <figure className='image is-1by1'>
                    <img src={image} alt={altImg}></img>
                </figure>
            </div>

            <div className='card-content'>
                <div className='media-content'>
                    <p className='title is-4'>{title}</p>
                    <p className='subtitle is-6'>{handle}</p>
                </div>
            </div>

            <div className='card-content'>
                <p className='media-content'>{description}</p>
            </div>
        </div>
    )
}

export default ProfileCard