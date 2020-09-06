import React from 'react';

import Jouer from '../img/Play2.png';
import Apprendre from '../img/Learn2.png';
import Trouver from '../img/Search2.png';
import Contacter from '../img/Contact2.png';

import '../css/Icons&AdminsIcons.css';

class Icons extends React.Component {
    render() {
        return(
            <ul className='listIcons'>
                <li><a href='/jouer'><img src={Jouer} alt='bouton Jouer'/>Jouer</a></li>
                <li><a href='/apprendre'><img src={Apprendre} alt='bouton Apprendre'/>Apprendre</a></li>
                <li><a href='/trouver'><img src={Trouver} alt='bouton Trouver'/>Trouver</a></li>
                <li><a href='mailto:hopes.journey.contact@gmail.com'><img src={Contacter} alt='bouton Contacter'/>Contacter</a></li>
            </ul>
        );
    };
};

export default Icons;