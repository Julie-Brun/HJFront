import React from 'react';

import '../css/Search.css';

class Search extends React.Component {
    render() {
        return(
            <div id='search'>
                <input type='text' name='search'/>
                <button type='button' name='searchButton'>Rechercher</button>
            </div>
        );
    };
};

export default Search;