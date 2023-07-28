import React from 'react'
import ProfileCard from './ProfileCard'
import AlexaImage from '../images/alexa.png'
import CortanaImage from '../images/cortana.png'
import SiriImage from '../images/siri.png'

function PDAssistant() {


    return (
        <>
            <div>Personal Digital Assistants</div>
            <br/>
            <div style={{display: 'flex', gap:'1rem'}}>
                <ProfileCard img={AlexaImage} title='Alexa' handle='@alexa99' />
                <ProfileCard img={CortanaImage} title='Siri' handle='@Siri' />
                <ProfileCard img={SiriImage} title='Cortana' handle='@Cortana' />
            </div>
        </>
    )
}

export default PDAssistant