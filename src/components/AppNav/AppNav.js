import React, {Component} from 'react';
import './AppNav.css';

class AppNav extends Component {    
    constructor(props){
        super(props);
        this.state = Object.assign({}, {extend_burger_nav: false, menu_items: props.navigation});                
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
        if(window.scrollY > document.getElementById('home').offsetHeight)
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
                <nav id="sticky-navbar" className="navbar has-shadow has-text-centered">
                    <div className="navbar-brand">                                        
                        <span className="menu-text is-hidden-fullhd is-hidden-widescreen is-hidden-desktop">MENU</span>                        
                        <span className="navbar-burger burger icon is-large" onClick={() => this.toggleMobileNav()}><i className="fa fa-bars fa-2x"></i></span>                        
                    </div>
            
                    <div className="navbar-menu">
                        <div className="navbar-start">                            
                            { this.state.menu_items.map(i => <a key={i.key} href={'#' + i.name.toLowerCase()} className="navbar-item has-text-centered">{i.name.toUpperCase()}</a>)}    
                        </div>
                    </div>
                </nav>
            </header>
        );
    }    
}

export default AppNav;