import React from 'react';

import Jouer from '../img/Play2.png';
import Apprendre from '../img/Learn2.png';
import Trouver from '../img/Search2.png';
import Contacter from '../img/Contact2.png';

import '../css/Menu.css';

class Menu extends React.Component {
    constructor () {
        super();

        this.state = {
            toggle: false
        };

        // Bind
        this.handleClick = this.handleClick.bind(this);
    };



    handleClick() {

        this.setState({
            toggle: !this.state.toggle
        });
    }

    render() {

        const styles = {
            lineTop: {
              transform: this.state.toggle ? ' translate(4px) rotate(45deg)':'none',
              transformOrigin: 'top left',
              marginBottom: '5px',
            },
            lineMiddle: {
              opacity: this.state.toggle ? 0: 1,
              transform: this.state.open ? 'translateX(-16px)':'none',
            },
            lineBottom: {
              transform: this.state.toggle ? 'translateX(-1px) rotate(-45deg)':'none',
              transformOrigin: 'top left',
              marginTop: '5px',
            },
            openMenu: {
                border: this.state.toggle ? '2px solid white':'none',
                borderRadius: this.state.toggle ? '10px':'none',
                background: this.state.toggle ? '#1D5664':'none',
            },
            openNav: {
                display: this.state.toggle ? 'flex':'none',
            }
        }

        return (
            <div id='menu' style={{...styles.openMenu}}>
                <div id='menuButton' onClick={this.handleClick}>
                    <div style={{...styles.lineTop}}/>
                    <div style={{...styles.lineMiddle}}/>
                    <div style={{...styles.lineBottom}}/>
                </div>
                <div id='nav' style={{...styles.openNav}} >
                    <h3>Menu</h3>
                    <ul>
                        <li><a href='#'><img src={Jouer} alt='bouton Jouer'/>Jouer</a></li>
                        <li><a href='#'><img src={Apprendre} alt='bouton Apprendre'/>Apprendre</a></li>
                    </ul>
                    <ul>
                        <li><a href='#'><img src={Trouver} alt='bouton Trouver'/>Trouver</a></li>
                        <li><a href='#'><img src={Contacter} alt='bouton Contacter'/>Contacter</a></li>
                    </ul>
                </div>
            </div>
        );
    };
};

export default Menu;