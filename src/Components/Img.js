import React from 'react';

import SleepHope from '../img/SleepHope4.png'

import '../css/Img.css';

class Img extends React.Component {
    render(){
        return(
            <div id='img'>
                <img src={SleepHope} alt='Hope endormie'/>
            </div>
        );
    };
};

export default Img;