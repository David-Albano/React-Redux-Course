import React, {useState} from 'react'
import ShowAnimal from './ShowAnimal'

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'alligator', 'horse']

    return animals[Math.floor(Math.random() * animals.length)]
}

function Animals() {
    const [animals, setAnimals] = useState([])

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    return (
        <div>
            <button onClick={handleClick} >Add Animal</button>
            { animals.map((animal, index) => <ShowAnimal key={index} type = {animal} />) }
        </div>
    )
}

export default Animals