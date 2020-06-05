import React from 'react';
import './Aboutexperience.css';
import Nav from './Nav'
import Footer from './Footer'
import './PageNotFound.css'
import cat2 from './images/cat2.jpeg'
import Burger from './Burger'



export default function PageNotFound() {
    return (
        <div className="App">
            <div id="body">
                <main>
                    <Burger />
                    <Nav />
                    <div className="notfoundsection">
                        <section className="dinosaurSection">
                            <h1 className="ohno">Oh dear, you seem lost. </h1>
                            <div className="dinosaur">
                                <img id="cat" src={cat2} alt="cat" />
                                {/*<img id="dino" src={dinosaur} alt="dinosaur" />
                                <img id="person" src={guy} alt="running man" /> */}
                            </div>
                            <p>This page doesn't exist! Hit your browser's back button or use the navigation links to return to safety.</p>
                        </section>
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    )
}