import React from 'react';
import '../Experience/Experience.css';

class Experience extends React.Component {
    constructor(props){
        super(props)        
    }

    render() {
        return (
            <section id="experience" className="hero is-primary is-large">
                <div class="hero-body">
                    <div class="container">
                        <p class="title">
                            This is experience section
                        </p>
                    </div>
                </div>    
            </section>   
        );
    }
}

export default Experience;