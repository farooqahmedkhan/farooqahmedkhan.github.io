import React from 'react';
import '../Portfolio/Portfolio.css';

class Portfolio extends React.Component {
    constructor(props){
        super(props)        
    }

    render() {
        return (
            <section id="portfolio" className="hero is-primary is-large">
                <div class="hero-body">
                    <div class="container">
                        <p class="title">
                            This is portfolio section
                        </p>
                    </div>
                </div>    
            </section>   
        );
    }
}

export default Portfolio;