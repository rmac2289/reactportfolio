import React from 'react';
import quizapp from '../images/quizAppIncorrect.png';
import quizapp2 from '../images/quizAppCorrect.png'
import quizapp3 from '../images/quizApp.png';
import quizapp4 from '../images/quizAppTryAgain.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './projects.css';

export default function Quiz(){
    return (
        <section className="section4">
            <div className="public">
                <h3>public safety quiz</h3>
                <div id="publicsafety">
                    <p>This is a simple quiz application using HTML/CSS and JavaScript via jQuery. I use
                    jQuery to manipulate the DOM in order to:
                    <br/>- Cycle through questions
                    <br/>- Generate questions and answers
                    <br/>- Produce feedback depending on correctness
                    <br/>- Update/display the user's score and question number
                    <br/>- Display final score with a prompt to retry the quiz
                    <br/><br/>
                    </p>
                    <div className="githublist">
                    <div><a id="githubLink" className="repoLinks" href="https://github.com/rmac2289/quizApp"
                        target="_blank" rel="noopener noreferrer">{'github repo'}</a></div>
                    <div><a className="repoLinks" href="https://rmac2289.github.io/quizApp/" target="_blank" rel="noopener noreferrer">{'live app'}</a></div>
                    </div>
                </div>
            </div>
            <div className="mealGenerator">
            <Carousel 
            transitionTime={600}
            showThumbs={false} 
            showStatus={false} 
            infiniteLoop={true} 
            className="mealScreenshot">
                <div>
                <img src={quizapp} alt="incorrect answer"/>
                </div>
                <div>
                <img src={quizapp2} alt="correct answer"/>
                </div>
                <div>
                <img src={quizapp3} alt="home page"/>
                </div>
                <div>
                <img src={quizapp4} alt="try again"/>
                </div>
            </Carousel>
            </div>
        </section>
    )
}