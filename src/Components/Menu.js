import React from 'react';

import AdminsIcons from './AdminsIcons';
import Icons from './Icons';

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
    };

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
                height: this.state.toggle ? 'fit-content': '0px',
            },
            openNav: {
                display: this.state.toggle ? 'flex':'none',
            }
        };

        return (
            <div id='menu' style={{...styles.openMenu}}>
                <div id='menuButton' onClick={this.handleClick}>
                    <div style={{...styles.lineTop}}/>
                    <div style={{...styles.lineMiddle}}/>
                    <div style={{...styles.lineBottom}}/>
                </div>
                <div id='nav' style={{...styles.openNav}} >
                    <h3>Menu</h3>
                    <Icons/>
                    {localStorage.getItem('token') ? <AdminsIcons/> : null}
                </div>
            </div>
        );
    };
};

export default Menu;