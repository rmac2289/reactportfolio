import React from 'react';
import '../App/App.css';
import './HomePage.css'
import Nav from '../Nav/Nav';
import Burger from '../Burger/Burger';
import Projects from '../Projects/Projects';
import Header from '../Header/Header';

function HomePage(){
    return (
    <div id="home" className="App">
    <div id="body">
    <Burger />
    <Nav />
        <Header/> 
    <Projects/>
    </div>
    </div>
    )
}
export default HomePage