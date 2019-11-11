import React from 'react';
import '../Skills/Skills.css';

class Skills extends React.Component {
    constructor(props){
        super(props)        
    }

    render() {
        return (
            <section id="skills" className="hero is-primary is-large">
                <div class="hero-body">
                    <div class="container">
                        <p class="title">
                            This is skills section
                        </p>
                    </div>
                </div>    
            </section>   
        );
    }
}

export default Skills;