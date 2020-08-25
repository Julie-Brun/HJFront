import React from 'react';
import { Redirect } from 'react-router-dom';

import Header from './Header';
import FormShelter from './FormShelter';
import HopeD from './HopeD';

import '../css/PageAddShelter.css';

class PageAddShelter extends React.Component {
    render() {
        return(
            <div id='addShelter'>
                <Header redirectToHome={this.props.redirectToHome}/>
                { this.props.toHome ? <Redirect push to='/'/> : null }
                <div id='addShelterBody'>
                    <FormShelter/>
                    <HopeD/>
                </div>
            </div>
        );
    };
};

export default PageAddShelter;