import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import ErrorView from '../Error'
import HomeView from '../Home'
import BooksRouter from './BooksRouter'
import Header from '../header/Header'
export default function AppRouter() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <HomeView />
                </Route>
                <Route path="/books">
                    <BooksRouter />
                </Route>
                <Route>
                    <ErrorView msg='Page Not Found. Please try again later.' errorCode='404'/>
                </Route>
            </Switch>
        </Router>
    )
}