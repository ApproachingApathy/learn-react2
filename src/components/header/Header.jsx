import React from 'react'

import Navbar from './Navbar'

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header-logo-div">
                    <img src="https://via.placeholder.com/64svg" alt="Header logo." className="header-logo"/>
                    <div className="header-title">
                        <h1>Title</h1>
                    </div>
                </div>
                <div className="header-nav-div">
                    <Navbar />
                </div>
            </header>
        </>
    )
}