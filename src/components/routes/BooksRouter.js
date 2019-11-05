import React from 'react'
import {
    Route
} from 'react-router-dom'

import BooksList from '../books/BooksList'
import BooksDetail from '../books/BooksDetail'

export default function BooksRouter() {
    return (
        <>
            <Route exact path='/books/latest'>
                <BooksList sort='latest' />
            </Route>
            <Route exact path='/books/:id'>
                <BooksDetail />
            </Route>
            <Route exact path='/books'>
                <BooksList sort='rank' />
            </Route>
        </>
    )
}