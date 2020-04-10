import React from 'react';

import Jouer from '../img/Play2.png';
import Apprendre from '../img/Learn2.png';
import Trouver from '../img/Search2.png';
import Contacter from '../img/Contact2.png';

import '../css/MenuHome.css';

class MenuHome extends React.Component {
    render(){
        return(
            <div id='menuHome'>
                <a href='#'><img src={Jouer} alt='Bouton Jouer'/>Jouer</a>
                <a href='#'><img src={Apprendre} alt='Bouton Apprendre'/>Apprendre</a>
                <a href='#'><img src={Trouver} alt='Bouton Trouver'/>Trouver</a>
                <a href='#'><img src={Contacter} alt='Bouton Contacter'/>Contacter</a>
            </div>
        );
    };
};

export default MenuHome;