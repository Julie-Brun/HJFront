import React from 'react';

import Admins from '../img/Admins2.png';
import Shelters from '../img/Shelters2.png';
import Logout from '../img/Logout2.png';

import '../css/MenuHomeAdmins.css';

class MenuHomeAdmins extends React.Component {
    render() {
        return(
            <div id='menuHomeAdmins'>
                <a href='/admin/admins'><img src={Admins} alt='Bouton Admins'/>Gestion Admins</a>
                <a href='/admin/logout'><img src={Logout} alt='Bouton Logout'/>Déconnexion</a>
                <a href='/admin/shelters'><img src={Shelters} alt='Bouton Shelters'/>Gestion Refuges</a>
            </div>
        );
    };
};

export default MenuHomeAdmins;