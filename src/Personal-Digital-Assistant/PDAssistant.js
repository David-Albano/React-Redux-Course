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
            <div>
                <ProfileCard image={AlexaImage} title='Alexa' handle='@alexa99' altImg='Alexa Logo' />
                <ProfileCard image={SiriImage} title='Siri' handle='@Siri' altImg='Siri Logo' />
                <ProfileCard image={CortanaImage} title='Cortana' handle='@Cortana' altImg='Cortana Logo' />
            </div>
        </>
    )
}

export default PDAssistant