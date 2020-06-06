import React from 'react';
import hearsay1 from './Screenshots/hearsay1.png'
import hearsay2 from './Screenshots/hearsay2.png'
import hearsay3 from './Screenshots/hearsay3.png'
import hearsay4 from './Screenshots/hearsay4.png'
import './projects.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Hearsay(){
    return (
<section className="section3">
            <div className="public">
                <h3>hearsay</h3>
                <p id="publicsafety">A full-stack application using Node.js on the backend and React
                on the frontend.
                <br/>
                <ul className="githublist">
                    <li><a id="githubLink" className="repoLinks" href="https://github.com/rmac2289/hearsay-app"
                        target="_blank" rel="noopener noreferrer">{'client side repo'}</a></li>
                    <li><a id="githubLink" className="repoLinks" href="https://github.com/rmac2289/hearsay-server"
                        target="_blank" rel="noopener noreferrer">{'server side repo'}</a></li>
                    <li><a className="repoLinks" href="https://hearsay-app.now.sh/" target="_blank" rel="noopener noreferrer">{'live app'}</a></li>
                </ul>
                </p> 
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