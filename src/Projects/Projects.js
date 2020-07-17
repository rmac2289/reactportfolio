import React from 'react';
import './projects.css'
import Accordion from '../Accordion/Accordion';


export default function Projects(){
    return (
        <div className="projects App">
            <div id="body">
                <main className="main-border">
                <section className="projectsHeader">
                 <h4 className="projects-header">projects</h4>                
                 </section> 
                 <Accordion />
                    
                </main>
            </div>
        </div>
    )
}