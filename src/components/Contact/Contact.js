import React from 'react';
import '../Contact/Contact.css';

class Contact extends React.Component {
    constructor(props){
        super(props)        
    }

    render() {
        return (
            <section id="contact" className="hero is-primary is-large">
                <div class="hero-body">
                    <div class="container">
                        <p class="title">
                            This is contact section
                        </p>
                    </div>
                </div>    
            </section>   
        );
    }
}

export default Contact;