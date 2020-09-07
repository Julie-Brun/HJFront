import React from 'react';

import Home from '../img/Home2.png';
import Admins from '../img/Admins2.png';
import Shelters from '../img/Shelters2.png';
import Logout from '../img/Logout2.png';

import '../css/Icons&AdminsIcons.css';

class AdminsIcons extends React.Component {
    render() {
        return(
            <ul className='listIcons'>
                <li><a href='/admin/home'><img src={Home} alt='bouton Home'/>Accueil</a></li>
                <li><a href='/admin/admins'><img src={Admins} alt='bouton Admins'/>Gestion Admins</a></li>
                <li><a href='/admin/shelters'><img src={Shelters} alt='bouton Shelters'/>Gestion Refuges</a></li>
                <li><a href='/admin/logout'><img src={Logout} alt='bouton Logout'/>Déconnexion</a></li>
            </ul>
        );
    };
};

export default AdminsIcons;