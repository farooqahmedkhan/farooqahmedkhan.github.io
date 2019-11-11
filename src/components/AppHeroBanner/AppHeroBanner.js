import React from 'react';
import './AppHeroBanner.css';

function AppHeroBanner(props) {
    return (
        <section id="home" className="hero is-fullheight has-background-info">
            <div className="hero-body">
                <div className="container has-text-left">
                    <h1 className="title has-text-white is-size-6-mobile is-size-4-tablet is-size-3-desktop is-size-2-widescreen is-size-1-fullhd">
                        {props.title}
                    </h1>
                    <h2 className="subtitle has-text-white is-size-7-mobile is-size-6-tablet is-size-5-desktop is-size-4-widescreen is-size-3-fullhd">
                        {props.sub_title}
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default AppHeroBanner;