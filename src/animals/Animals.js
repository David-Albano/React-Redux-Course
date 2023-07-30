import React, {useState} from 'react'
import ShowAnimal from './ShowAnimal'

function Animals() {
    const [count, setCount] = useState(0)


    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <button  onClick={handleClick} >Add Animal</button>
            <div>Number of animals: {count}</div>
            <div><ShowAnimal type='horse' /></div>
        </>
    )
}

export default Animals