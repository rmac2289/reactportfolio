import React from 'react';
import './Aboutexperience.css';
import STORE from './STORE';
import Nav from './Nav'
import Footer from './Footer'
import Burger from './Burger'



export default function Aboutexperience(){
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
            <section className="section2">
                <h4>experience</h4>
                <p>{STORE.paragraphs.experience1}
                    <br/>
                    <br/>
                    {STORE.paragraphs.experience2}
                </p>
            </section>
        </div>
        <Footer />
        </main>
        </div>
        </div>
    )
}