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
                <nav id="sticky-navbar" class="navbar has-shadow has-text-centered">
                    <div class="navbar-brand">                
                        {/* <figure class="image is-64x64">
                            <img src="profile_large.jpg" class="is-rounded" alt="FAK"  />
                        </figure> */}
                        <span class="menu-text is-hidden-fullhd is-hidden-widescreen is-hidden-desktop">MENU</span>
                        
                        <span class="navbar-burger burger icon is-large" onClick={() => this.toggleMobileNav()}><i class="fa fa-bars fa-2x"></i></span>
                        {/* {this.state.extend_burger_nav === true && (<span class="navbar-burger burger icon is-large" onClick={() => this.toggleMobileNav()}><i class="fa fa-close fa-3x"></i></span>)}                         */}
                    </div>
    
                    <div class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item has-text-centered is-active">
                                HOME
                            </a>
    
                            <a class="navbar-item has-text-centered">
                                ABOUT
                            </a>     
                            <a class="navbar-item has-text-centered">
                                SKILLS
                            </a>                                                    
                            <a class="navbar-item has-text-centered">
                                EXPERIENCE
                            </a>
    
                            <a class="navbar-item has-text-centered">
                                EDUCATION
                            </a>
                            <a class="navbar-item has-text-centered">
                                PORTFOLIO
                            </a>     
                            <a class="navbar-item has-text-centered">
                                CONTACT ME
                            </a>     
                        </div>
                    </div>
                </nav>
            </header>
        );
    }    
}

export default AppNav;