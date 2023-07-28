import React from 'react'
import ProfileCard from './ProfileCard'
import AlexaImage from '../images/alexa.png'
import CortanaImage from '../images/cortana.png'
import SiriImage from '../images/siri.png'

function PDAssistant() {


    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <p class="title">Personal Digital Assistants</p>
                </div>
            </section>
            
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard image={AlexaImage} title='Alexa' handle='@alexa99' altImg='Alexa Logo'
                                        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit consequatur repellat aut beatae architecto error veniam sed provident, pariatur iste possimus, reprehenderit debitis illum, autem a temporibus nihil incidunt! Obcaecati.'
                            />
                        </div>
                        
                        <div className='column is-4'>
                            <ProfileCard image={SiriImage} title='Siri' handle='@Siri' altImg='Siri Logo'
                                        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit consequatur repellat aut beatae architecto error veniam sed provident, pariatur iste possimus, reprehenderit debitis illum, autem a temporibus nihil incidunt! Obcaecati.'
                            />
                        </div>

                        <div className='column is-4'>
                            <ProfileCard image={CortanaImage} title='Cortana' handle='@Cortana' altImg='Cortana Logo'
                                        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit consequatur repellat aut beatae architecto error veniam sed provident, pariatur iste possimus, reprehenderit debitis illum, autem a temporibus nihil incidunt! Obcaecati.'
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PDAssistant