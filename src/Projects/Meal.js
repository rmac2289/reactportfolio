import React from 'react';
import meal from '../images/mealscreenshot.png';
import meal2 from '../Screenshots/ingredientscreenshot copy.png';
import meal3 from '../Screenshots/listscreenshot.png';
import './projects.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import food from '../images/vegetable.png';

export default function Meal(){
    return (
<section className="section3">
            <div className="public">
                <h3>meal generator</h3>
                <div id="publicsafety">
                    <p id="project-p">This app uses HTML/CSS, JavaScript with jQuery and calls to two separate APIs.
                    The user inputs requirements for their own diet restrictions including calorie count, diet type, 
                    and foods to exclude. Given this information the app produces a list of breakfast, lunch, and dinner for seven days with links to recipes
                    and nutritional information. 
                    <br/><br/>
                    </p>
                    <div className="githublist">
                        <div><a id="githubLink" className="repoLinks" href="https://github.com/rmac2289/mealGenerator"
                        target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="project-link-icon" icon={faGithub}/>github repo</a></div>
                        <div><a className="repoLinks" href="https://rmac2289.github.io/mealGenerator/" target="_blank" rel="noopener noreferrer"><img className="project-link-icon" src={food} alt="vegetables" />live app</a></div>
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
                <img src={meal} alt="app landing page"/>
                </div>
                <div>
                <img src={meal2} alt="ingredient menu"/>
                </div>
                <div>
                <img src={meal3} alt="meal list"/>
                </div>
            </Carousel>
            </div>
        </section>
 )
}