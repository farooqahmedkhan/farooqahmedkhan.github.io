import React from 'react';
import './AppHeroBanner.css';

function AppHeroBanner(props) {
    return (
        <section class="hero is-fullheight has-background-info">
            <div class="hero-body">
                <div class="container has-text-left">
                    <h1 class="title has-text-white is-size-5 is-size-6-mobile is-size-5-tablet is-size-3-desktop">
                        {props.title}
                    </h1>
                    <h2 class="subtitle has-text-white is-size-7 is-size-7-mobile is-size-5-desktop">
                        {props.sub_title}
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default AppHeroBanner;