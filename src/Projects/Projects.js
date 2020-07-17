import React from 'react';
import Nav from '../Nav/Nav';
import './projects.css'
import Accordion from '../Accordion/Accordion';
import Burger from '../Burger/Burger';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Projects(){
    return (
        <div className="projects App">
            <div id="body">
                <Burger />
                <Nav />
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