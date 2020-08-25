import React from 'react';
import Title from './Title';
import Menu from './Menu';

import '../css/Header.css';

class Header extends React.Component {
    render() {
        return(
            <div id='header'>
                <Title title="Hope's Journey" subtitle="Le voyage de Hope" redirectToHome={this.props.redirectToHome}/>
                <Menu/>
            </div>
        );
    };
};

export default Header;