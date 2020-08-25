import React from 'react';

import '../css/ShelPicture.css';

class ShelPicture extends React.Component {
    render() {
        const local = "http://localhost:3050/";
        return(
            <div id='shelPicture'>
                <img src={local + this.props.picture} alt='Logo du refuge'/>
            </div>
        )
    }
}

export default ShelPicture;