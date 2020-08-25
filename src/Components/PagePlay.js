import React from 'react';
import { Redirect } from 'react-router-dom';

import Header from './Header';

import '../css/PagePlay.css';

class PagePlay extends React.Component {
    render() {
        return(
            <div id='play'>

                <Header redirectToHome={this.props.redirectToHome}/>
                { this.props.toHome ? <Redirect push to='/'/> : null }
                <div id='playBody'></div>

            </div>
        );
    };
};

export default PagePlay;