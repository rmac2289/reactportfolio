import React from 'react';
import './App.css';
import Nav from './Nav'
import Footer from './Footer'


function HomePage(){
    return (
    <div className="App">
    <div id="body">
    <Nav />
    <main>
        <header role="banner">
            <h1 className="header">ROSS MACDONALD</h1>
            <h2 className="header">full stack web developer in the San Francisco Bay Area</h2>
        </header>  
    </main>
    <Footer />
    </div>
    </div>
    )
}
export default HomePage