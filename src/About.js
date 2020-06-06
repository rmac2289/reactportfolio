import React from 'react';
import './About.css';
import STORE from './STORE';
import Nav from './Nav'
import Footer from './Footer'
import Burger from './Burger'



export default function About(){
    return (
        <div className="App">
        <div id="body">
        <main>
        <Burger id="burger"/>
        <Nav id="nav"/>
        <div className="beforesection1">
        <section className="section1">
                <h4>about me</h4>
                <p> {STORE.paragraphs.aboutMe1}
                    <br/>
                    <br/>
                    {STORE.paragraphs.aboutMe2}
                </p>
            </section>
        </div>
        <Footer />
        </main>
        </div>
        </div>
    )
}