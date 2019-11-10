import React from 'react';
import './AppContent.css';

class AppContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="container">
                <section class="hero is-large is-primary is-bold is-hidden-mobile">
                    <div class="hero-body">
                        <div class="container">
                        <h1 class="title">
                            Primary bold title
                        </h1>
                        <h2 class="subtitle">
                            Primary bold subtitle
                        </h2>
                        </div>
                    </div>
                </section>

                <section class="hero is-large is-info is-bold is-hidden-mobile">
                    <div class="hero-body">
                        <div class="container">
                        <h1 class="title">
                            Primary bold title
                        </h1>
                        <h2 class="subtitle">
                            Primary bold subtitle
                        </h2>
                        </div>
                    </div>
                </section>

                <section class="hero is-large is-danger is-bold is-hidden-mobile">
                    <div class="hero-body">
                        <div class="container">
                        <h1 class="title">
                            Primary bold title
                        </h1>
                        <h2 class="subtitle">
                            Primary bold subtitle
                        </h2>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AppContent;