import React from 'react';
import Header from './Header';
import '../css/Header.css'

class Home extends React.Component {
    render() {
        return(
            <div id='home'>
                <Header/>
                <p>Hello, World !</p>
            </div>
        );
    };
};

export default Home; 