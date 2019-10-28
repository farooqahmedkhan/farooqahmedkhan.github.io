import React from 'react';
import NavigationItem from './NaviagationItem';

function Navigation(){
    return (
        <div class="level">
            <div className="level-item">
                <ul className="columns is-mobile">
                    <NavigationItem icon="fa fa-user" text="About" />
                    <NavigationItem icon="fa fa-briefcase" text="Experience" />
                    <NavigationItem icon="fa fa-desktop" text="Projects" />
                    <NavigationItem icon="fa fa-envelope" text="Contact" />
                </ul>
            </div>
        </div>
    );
}

export default Navigation;