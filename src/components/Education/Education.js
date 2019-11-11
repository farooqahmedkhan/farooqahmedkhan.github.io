import React from 'react';
import '../Education/Education.css';

class Education extends React.Component {
    constructor(props){
        super(props)        
    }

    render() {
        return (
            <section id="education" className="hero is-primary is-large">
                <div class="hero-body">
                    <div class="container">
                        <p class="title">
                            This is education section
                        </p>
                    </div>
                </div>    
            </section>   
        );
    }
}

export default Education;