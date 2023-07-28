import React from 'react'
import ProfileCard from './ProfileCard'
import AlexaImage from '../images/alexa.png'
import CortanaImage from '../images/cortana.png'
import SiriImage from '../images/siri.png'

function PDAssistant() {


    return (
        <div>
            <div>Personal Digital Assistants</div>
            
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard image={AlexaImage} title='Alexa' handle='@alexa99' altImg='Alexa Logo' />
                        </div>
                        
                        <div className='column is-4'>
                            <ProfileCard image={SiriImage} title='Siri' handle='@Siri' altImg='Siri Logo' />
                        </div>

                        <div className='column is-4'>
                            <ProfileCard image={CortanaImage} title='Cortana' handle='@Cortana' altImg='Cortana Logo' />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PDAssistant