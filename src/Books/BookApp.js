import React, { useState } from 'react'
import BookList from './components/BookList'
import BookCreate from './components/BookCreate'

function BookApp() {
    const [books, setBooks] = useState([])

    return (
        <>
            <div>BookApp</div>
            <br />
            <div>
                <BookList />
                <br />

                <BookCreate />
            </div>
        </>
    )
}

export default BookApp