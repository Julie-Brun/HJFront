import React from 'react';

import Header from './Header';
import MapList from './MapList';
import Map from './Map';
import Add from './Add';
import Search from './Search';
import HopeD from './HopeD';

import '../css/PageFind.css';

class PageFind extends React.Component {
    render() {
        return(
            <div id='find'>

                <Header/>
                <div id='findBody'>
                    <MapList/>
                    <Map/>
                    <Add/>
                    <Search/>
                    <HopeD/>
                </div>

            </div>
        );
    };
};

export default PageFind;