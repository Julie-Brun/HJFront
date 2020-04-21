import React from 'react';

import '../css/List.css';

class List extends React.Component {
    render() {
        return(
            <div id='list'>
                <h2>Régions</h2>
                <div id='listItems'></div>
            </div>
        );
    };
};

export default List;