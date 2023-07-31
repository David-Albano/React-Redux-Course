import React, {useState} from 'react'

function BookCreate({onCreate}) {
    const [title, setTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate(title)

        setTitle('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={(event) => setTitle(event.target.value)} />
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default BookCreate