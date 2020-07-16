import React from 'react';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Burger from './Burger';
import Projects from './Projects';


function HomePage(){
    return (
    <div className="App">
    <div id="body">
    <Burger />
    <Nav />
    <main>
        <header role="banner">
            <div className="header-box">
            <h1 className="header">ROSS MACDONALD</h1>
            <h2 className="header">full stack web developer in the Portland metro area</h2>
            </div>
        </header>  
    </main>
    <Projects/>
    <Footer />
    </div>
    </div>
    )
}
export default HomePage