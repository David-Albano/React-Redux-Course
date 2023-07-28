import React from 'react'

function ProfileCard({title, handle}) {
    return (
        <div style={{width: '10rem', height:'15rem', border: '2px solid blue'}}>
            <h2>{title}</h2>
            <h3>{handle}</h3>
        </div>
    )
}

export default ProfileCard