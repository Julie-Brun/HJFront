import React from 'react';

import Header from './Header';
import Body from './Body';

import '../css/Header.css'

class Home extends React.Component {
    render() {
        return(
            <div id='home'>
                <Header/>
                <Body/>
            </div>
        );
    };
};

export default Home; 