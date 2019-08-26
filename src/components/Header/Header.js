import React from 'react';
import Navigation from './Navigation';
import './Header.css';

function Header(){
    return (
        <nav>
            <div className="level">
                <div className="level-item has-text-centered">
                    <figure className="image is-128x128">
                        <img className="is-rounded" src="profile_large.jpg" alt="Farooq Ahmed Khan" />
                    </figure>
                </div>
            </div>
            <Navigation />
        </nav>
    );
}

export default Header;