import React from 'react'

function ProfileCard({altImg, image, title, handle}) {
    return (
        <div>
            <img src={image} alt={altImg}></img>
            <div>{title}</div>
            <div>{handle}</div>
        </div>
    )
}

export default ProfileCard