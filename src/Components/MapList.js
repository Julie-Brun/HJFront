import React from 'react';

import '../css/MapList.css';

class MapList extends React.Component {
    render() {
        return(
            <div id='maplist'>
                <h2>Refuges</h2>
                <ul id='listItems'>
                    {this.props.data.map((shelter) => 
                        <li 
                            className='listItem' 
                            key={shelter._id} 
                            onClick={((e) => this.props.displayInfosAndCenterViewport(e, shelter, shelter.location.coordinates))}
                        >
                            {shelter.name}
                        </li> 
                    )}
                </ul>
            </div>
        );
    };
};

export default MapList;