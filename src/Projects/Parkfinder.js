import React from 'react';
import home from '../ParkScreenshots/home.jpg'
import comments from '../ParkScreenshots/comments.jpg'
import login from '../ParkScreenshots/login.jpg'
import park from '../ParkScreenshots/park.jpg'
import parklist from '../ParkScreenshots/parklist.jpg'
import signup from '../ParkScreenshots/signup.jpg'
import './projects.css';
import './Parkfinder.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import picnic from '../images/picnic.png';
export default function Hearsay(){
    return (
<section className="section3">
            <div className="public">
                <h3>find your park</h3>
                <div id="publicsafety">
                    <p id="project-p">Find Your Park is a full-stack application using Node.js with Express on the backend and React
                on the frontend. The app allows the user to search for California parks by activity, by name, or by choosing a location
                off the map. Users can sign up for an account and login if they wish to write or read comments made by other users on 
                individual parks, or if they would like to submit a suggestion for a park to be added to the site. Users are authenticated
                via JSON Web Tokens and passwords are encrypted on the database. All data is stored on a 
                PostgreSQL database using APIs I wrote on the Express server.
                    <br/>
                    </p>
                <div className="githublist">
                    <div><a id="githubLink" className="repoLinks" href="https://github.com/rmac2289/parkfinder-app"
                        target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="project-link-icon" icon={faGithub} />client side repo</a></div>
                    <div><a id="githubLink" className="repoLinks" href="https://github.com/rmac2289/parkfinder-api"
                        target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="project-link-icon" icon={faGithub} />server side repo</a></div>
                    <div><a className="repoLinks" href="https://findyourpark.netlify.app" target="_blank" rel="noopener noreferrer"><img className="project-link-icon" src={picnic} alt="picnic table" />live app</a></div>
                </div>
                </div> 
            </div>
            <div className="mealGenerator">
            <Carousel 
            transitionTime={600}
            dynamicHeight={true}
            showThumbs={false} 
            showStatus={false} 
            infiniteLoop={true} 
            className="mealScreenshot">
                <div>
                <img src={home} alt="app landing page"/>
                </div>
                <div>
                <img src={comments} alt="ingredient menu"/>
                </div>
                <div>
                <img src={park} alt="meal list"/>
                </div>
                <div>
                <img src={parklist} alt="meal list"/>
                </div>
                <div>
                <img src={signup} alt="meal list"/>
                </div>
                <div>
                <img src={login} alt="meal list"/>
                </div>
            </Carousel>
            </div>
        </section>
 )
}