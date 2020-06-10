import React from 'react';

import Ajouter from '../img/Add2.png';

import '../css/Add.css';

class Add extends React.Component {
    render() {
        
        if (this.props.isHovered) {
            return(
                <div id='add' onMouseEnter={this.props.toggleHover} onMouseLeave={this.props.toggleHover}>
                    <a href='/trouver/ajouter'><img src={Ajouter} alt='bouton Ajouter'/></a>
                    <p>Ajoute un refuge !</p>
                </div>
            );
        } else {
            return(
                <div id='add' onMouseEnter={this.props.toggleHover} onMouseLeave={this.props.toggleHover}>
                    <a href='/trouver/ajouter'><img src={Ajouter} alt='bouton Ajouter'/></a>
                </div>
            );
        }

    };
};

export default Add;