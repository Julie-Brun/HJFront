import React from 'react';

import Header from './Header';
import HopeG from './HopeG';
import ShelName from './ShelName';
import ShelInfos from './ShelInfos';
import ShelPicture from './ShelPicture';

import '../css/PageInfosShelter.css';

class PageInfosShelter extends React.Component {
    render() {
        return(
            <div id='info'>

                <Header/>
                <div id='infosBody'>
                    <HopeG/>
                    <ShelName/>
                    <ShelInfos/>
                    <ShelPicture/>
                </div>

            </div>
        );
    };
};

export default PageInfosShelter;