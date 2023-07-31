import React, { useState } from 'react'
import BookList from './components/BookList'
import BookCreate from './components/BookCreate'

function BookApp() {
    const [books, setBooks] = useState([])

    const createBook = (title) => {
        console.log(title)
    }

    return (
        <div>
            {/* <BookList />
            <br /> */}

            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default BookApp