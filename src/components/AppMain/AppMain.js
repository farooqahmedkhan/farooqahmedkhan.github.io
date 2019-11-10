import React from 'react';
import AppNav from '../AppNav/AppNav';
import AppContent from '../AppContent/AppContent';
import AppHeroBanner from '../AppHeroBanner/AppHeroBanner';

function AppMain() {
    return (
        <div class="main">
            <AppHeroBanner title="Farooq Ahmed Khan" sub_title="I  develop applications with flavors of Javascript &amp; PHP"></AppHeroBanner>    
            <AppNav></AppNav>
            <AppContent></AppContent>            
        </div>
    );
}

export default AppMain;