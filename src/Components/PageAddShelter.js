import React from 'react';

import Header from './Header';
import FormShelter from './FormShelter';
import HopeD from './HopeD';

import '../css/PageAddShelter.css';

class PageAddShelter extends React.Component {
    render() {
        return(
            <div id='addShelter'>

                <Header/>
                <div id='addShelterBody'>
                    <FormShelter/>
                    <HopeD/>
                </div>

            </div>
        );
    };
};

export default PageAddShelter;