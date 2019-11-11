import React from 'react';
import AppNav from '../AppNav/AppNav';
import AppContent from '../AppContent/AppContent';
import AppHeroBanner from '../AppHeroBanner/AppHeroBanner';

class AppMain extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            navigation: [
                { key: 1, name: 'Home'},
                { key: 2, name: 'About'},
                { key: 3, name: 'Skills'},
                { key: 4, name: 'Experience'},
                { key: 5, name: 'Education'},
                { key: 6, name: 'Portfolio'},
                { key: 7, name: 'Contact'}
            ],
            user: {}
        };
    }

    render() {        
        return (
            <div className="main">
                <AppHeroBanner title="Farooq Ahmed Khan" sub_title="I  develop applications with flavors of Javascript &amp; PHP"></AppHeroBanner>    
                <AppNav navigation={this.state.navigation} user={this.state.user}></AppNav>
                <AppContent user=""></AppContent>            
            </div>
        );
    }
}

export default AppMain;