import React from 'react';

import Img from './Img';
import MenuHome from './MenuHome';

import '../css/Body.css';

class Body extends React.Component {
    render() {
        return(
            <div id='body'>
                <Img/>
                <MenuHome/>
            </div>
        );
    };
};

export default Body;