import React from 'react';
import { Redirect } from 'react-router-dom';

import Header from './Header';
import LogInForm from './LogInForm';

class PageLogin extends React.Component {
    render() {
        return(
            <div id='login'>
                <Header adminPage={this.props.adminPage} redirectToHome={this.props.redirectToHome}/>
                { this.props.toHome ? <Redirect push to='/'/> : null }
                <LogInForm/>
            </div>
        );
    };
};

export default PageLogin;