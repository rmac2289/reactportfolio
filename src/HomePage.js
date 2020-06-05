import React from 'react';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Burger from './Burger';


function HomePage(){
    return (
    <div className="App">
    <div id="body">
    <Burger />
    <Nav />
    <main>
        <header role="banner">
            <h1 className="header">ROSS MACDONALD</h1>
            <h2 className="header">full stack web developer in the Portland metro area</h2>
        </header>  
    </main>
    <Footer />
    </div>
    </div>
    )
}
export default HomePage