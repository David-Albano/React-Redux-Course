import React from 'react'
import ProfileCard from './ProfileCard'

function PDAssistant() {


    return (
        <>
            <div>
                <div>Personal Digital Assistants</div>
                <ProfileCard title='Alexa' handle='@alexa99' />
                <ProfileCard title='Siri' handle='@Siri' />
                <ProfileCard title='Cortana' handle='@Cortana' />
            </div>
        </>
    )
}

export default PDAssistant