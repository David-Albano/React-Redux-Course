import React from 'react'

function Practice() {
    const typeInputNumber = 'number'
    const minInputNumber = '3'

    return (
        <>  
            <h1>React App</h1>
            <h1>{new Date().toLocaleTimeString()}</h1>
            <input 
                type="number" min={5} max={22}
                style={{border: '3px solid red'}}
                placeholder="Write down here"
            />

            <br/>
            <br/>

            <input 
                type={typeInputNumber} min={minInputNumber} max={22}
                style={{backgroundColor: 'blue'}}
                />

            <br/>
            <br/>
            
            <textarea autoFocus={true} spellCheck={true} />
        </> 
    )
}

export default Practice