import React from 'react';
import hearsay1 from '../Screenshots/hearsay1.png'
import hearsay2 from '../Screenshots/hearsay2.png'
import hearsay3 from '../Screenshots/hearsay3.png'
import hearsay4 from '../Screenshots/hearsay4.png'
import './projects.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import bullhorn from '../images/bullhorn.png'

export default function Hearsay(){
    return (
<section className="section3">
            <div className="public">
                <h3>hearsay</h3>
                <div id="publicsafety">
                    <p id="project-p">This application uses React on the frontend with Node.js on the backend. Users can explore 
                    reviews left by other users involving contacts with law enforcement, sign up and leave their own 
                    reviews, or participate in discussion boards regarding different criminal justice topics. I use JSON web tokens
                    for user authentication, and all data is stored on a PostgreSQL database using APIs written on the Express server.
                    <br/>
                    </p>
                <div className="githublist">
                    <div><a id="githubLink" className="repoLinks" href="https://github.com/rmac2289/hearsay-app"
                        target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="project-link-icon" icon={faGithub} />client side repo</a></div>
                    <div><a id="githubLink" className="repoLinks" href="https://github.com/rmac2289/hearsay-server"
                        target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="project-link-icon" icon={faGithub} />server side repo</a></div>
                    <div><a className="repoLinks" href="https://hearsay-app.now.sh/" target="_blank" rel="noopener noreferrer"><img className="project-link-icon" src={bullhorn} alt="picnic table" />live app</a></div>
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
                <img src={hearsay1} alt="app landing page"/>
                </div>
                <div>
                <img src={hearsay2} alt="ingredient menu"/>
                </div>
                <div>
                <img src={hearsay3} alt="meal list"/>
                </div>
                <div>
                <img src={hearsay4} alt="meal list"/>
                </div>
            </Carousel>
            </div>
        </section>
 )
}