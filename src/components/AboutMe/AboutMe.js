import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component {
    constructor(props){
        super(props)        
    }

    render() {
        return (
            <section id="about" className="hero is-primary is-large">
                <div class="hero-body">
                    <div class="container">
                        <p class="title">
                            Fullheight hero with navbar
                        </p>
                    </div>
                </div>    
            </section>   
        );
    }
}

export default AboutMe;