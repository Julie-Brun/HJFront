import React from 'react';

import Header from './Header';

import '../css/PagePlay.css';

class PagePlay extends React.Component {
    render() {
        return(
            <div id='play'>

                <Header/>
                <div id='playBody'></div>

            </div>
        );
    };
};

export default PagePlay;