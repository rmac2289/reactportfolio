import React from 'react';
import Nav from './Nav';
import Footer from './Footer'
import './projects.css'
import ProjectAccordion from './Accordion';
import Burger from './Burger';

export default function Projects(){
    return (
        <div className="App">
            <div id="body">
                <Burger />
                <Nav />
                <main>
                <section className="projectsHeader">
                 <h4>projects</h4>
                
                 </section> 
                 <ProjectAccordion />
                    
                </main>
            </div>
            <Footer />
        </div>
    )
}