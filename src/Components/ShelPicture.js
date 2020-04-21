import React from 'react';

import Logo from '../img/LogoDefaut.png'

import '../css/ShelPicture.css';

class ShelPicture extends React.Component {
    render() {
        return(
            <div id='shelPicture'>
                <img src={Logo} alt='Logo'/>
            </div>
        )
    }
}

export default ShelPicture;