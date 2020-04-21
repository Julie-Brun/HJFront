import React from 'react';

import Header from './Header';
import Img from './Img';
import MenuHome from './MenuHome';

import '../css/PageHome.css';

class Home extends React.Component {
    render() {
        return(
            <div id='home'>
                <Header/>
                <div id='homeBody'>
                    <Img/>
                    <MenuHome/>
                </div>
            </div>
        );
    };
};

export default Home; 