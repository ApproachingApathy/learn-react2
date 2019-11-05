import React from 'react'
import {useParams} from 'react-router-dom'

export default class BooksListView extends React.Component {
    sortMethod = this.props.sort
    getBooks = () => {
        //Get a list of books, and sort them.
        return ['I\'m book 1', 'I\'m book 2', 'I\'m book 3', 'I\'m book 4']
    }


    render() {
        return (
            <>
                <h1>Books list!</h1>
                <h2>Sorted by {this.sortMethod} </h2>
                <ul>
                    {this.getBooks().map((book)=> <li>{book}</li>)}
                </ul>
            </>
        )
    }
}