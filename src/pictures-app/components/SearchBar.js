import React, { useState } from 'react'
import searchImages from '../../api'

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('')
    
    const handlerSubmit = (event) => {
        event.preventDefault()
        onSubmit(term)
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input type='search' onChange={(e) => setTerm(e.target.value)} />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar