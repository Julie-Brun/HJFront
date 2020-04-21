import React from 'react';

import '../css/ShelInfos.css';

class ShelInfos extends React.Component {
    render() {
        return(
            <div id='shelInfos'>
                <ul id='infos'>
                    <li id='shelType'><span>Spécialisée dans :</span> Truc</li>
                    <li id='shelAddress'><span>Adresse :</span> Bidule</li>
                    <li id='shelEmail'><span>Email :</span> Machin</li>
                    <li id='shelPhone01'><span>Téléphone :</span> Chose</li>
                    <li id='shelPhone02'><span>Portable :</span> Chouette</li>
                </ul>
                <p id='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        )
    }
}

export default ShelInfos;