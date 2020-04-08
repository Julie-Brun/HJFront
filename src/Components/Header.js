import React from 'react';
import Title from './Title';
import Menu from './Menu';

class Header extends React.Component {
    render() {
        return(
            <div id='header'>
                <Title title="Hope's Journey" subtitle="Le voyage de Hope"/>
                <Menu/>
            </div>
        );
    };
};

export default Header;