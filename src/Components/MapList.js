import React from 'react';

import '../css/MapList.css';

class MapList extends React.Component {
    render() {
        return(
            <div id='maplist'>
                <h2>Régions</h2>
                <div id='listItems'></div>
            </div>
        );
    };
};

export default MapList;