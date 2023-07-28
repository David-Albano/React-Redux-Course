import React from 'react'

function ProfileCard({img, title, handle}) {
    return (
        <div style={{width: '10rem', height:'15rem', border: '2px solid blue'}}>
            <div style={{textAlign: 'center'}}>
                <img src={img} style={{width: '8rem', height:'5rem'}}></img>
            </div>
            <h2>{title}</h2>
            <h3>{handle}</h3>
        </div>
    )
}

export default ProfileCard