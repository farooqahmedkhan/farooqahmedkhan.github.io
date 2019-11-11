import React from 'react';
import './AppContent.css';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

class AppContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="content container">                 
                <AboutMe></AboutMe>  
                <Skills></Skills>   
                <Experience></Experience> 
                <Education></Education>  
                <Portfolio></Portfolio>            
                <Contact></Contact>
            </div>
        );
    }
}

export default AppContent;