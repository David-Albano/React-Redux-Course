import React from 'react'
import ShowAnimal from './ShowAnimal'

function Animals() {
    const handleClick = () => {
        console.log('button clicked')
    }


    return (
        <>
            <button  onClick={handleClick} >Add Animal</button>
            <div>
                <ShowAnimal type='horse' />
            </div>
        </>
    )
}

export default Animals