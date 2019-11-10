import React, {Component} from 'react';
import './AppNav.css';

class AppNav extends Component {    
    constructor(props){
        super(props);
        this.state = {
            extend_burger_nav: false
        };

        window.onscroll = (e) => {                        
            this.stickNavToTop(e);
        }
    }

    /**
     * Make sure , if the banner goes out of scroll
     * Make header sticky
     */
    stickNavToTop = (scrollEvent) => {
        // fixed top nav bar            
        if(window.scrollY > document.getElementById('banner').offsetHeight)
            document.getElementById('sticky-navbar').classList.add(['is-fixed-top']);
        else
            document.getElementById('sticky-navbar').classList.remove(['is-fixed-top']);                        
    };

    toggleMobileNav() {
        this.state.extend_burger_nav = (!this.state.extend_burger_nav);
        document.getElementsByClassName('navbar-menu').item(0).style.display = this.state.extend_burger_nav  === true ? 'block' : 'none';
        window.scrollTo({
            behavior: "smooth",
            top: document.getElementsByClassName('hero').item(0).scrollHeight
        });
    }
    
    render() {
        return (
            <header>
                <nav id="sticky-navbar" class="navbar has-shadow">
                    <div class="navbar-brand">                
                        <figure class="image is-64x64">
                            <img src="profile_large.jpg" class="is-rounded" alt="FAK"  />
                        </figure>
                        
                        <span class="navbar-burger burger icon is-large" onClick={() => this.toggleMobileNav()}><i class="fa fa-bars fa-2x"></i></span>
                        {/* {this.state.extend_burger_nav === true && (<span class="navbar-burger burger icon is-large" onClick={() => this.toggleMobileNav()}><i class="fa fa-close fa-3x"></i></span>)}                         */}
                    </div>
    
                    <div class="navbar-menu">
                        <div class="navbar-start" props={this.state.extend_burger_nav}>
                            <a class="navbar-item has-text-centered">
                                Skills
                            </a>
    
                            <a class="navbar-item has-text-centered">
                                Experience
                            </a>
    
                            <a class="navbar-item has-text-centered">
                                Portfolio
                            </a>
    
                            <a class="navbar-item has-text-centered">
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }    
}

export default AppNav;