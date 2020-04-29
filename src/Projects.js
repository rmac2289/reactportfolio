import React from 'react';
import Nav from './Nav';
import Footer from './Footer'
import Meal from './Meal'
import Quiz from './Quiz'
import './projects.css'

export default function Projects(){
    return (
        <div className="App">
            <div id="body">
                <Nav />
                <main>
                <section className="projectsHeader">
                 <h4>projects</h4>
                 </section> 
                    <Meal />
                    <Quiz />
                </main>
            </div>
            <Footer />
        </div>
    )
}