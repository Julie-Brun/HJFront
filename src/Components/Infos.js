import React from 'react';

import '../css/Infos.css';

class Infos extends React.Component {
    render() {
        console.log(this.props.shelter.logo);
        
        return(
            <div id='infoBody' style={this.props.isDisplayed ? {display: 'flex'} : {display: 'none'}}>
                <div id='infoHeader'>
                    <img src={this.props.shelter.logo} alt='Logo'/>
                    <h3 key={this.props.shelter._id}>{this.props.shelter.name}</h3>
                    <button type='button' onClick={this.props.close}>X</button>
                </div>
                <p key={this.props.shelter._id} id='text'>{this.props.shelter.description}</p>
                <a href={'/trouver/infos?id='+this.props.shelter._id}><button id='button' type='button'>En savoir +</button></a>
            </div>
        )
    }
}

export default Infos;