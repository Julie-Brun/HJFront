import React from 'react';

import Ajouter from '../img/Add2.png';

import '../css/Add.css';

class Add extends React.Component {
    render() {
        return(
            <div id='add'>
                <a href='#'><img src={Ajouter} alt='bouton Ajouter'/></a>
            </div>
        );
    };
};

export default Add;