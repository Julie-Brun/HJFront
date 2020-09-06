import React from 'react';

import '../css/ShelInfos.css';

const ShelInfos = (props) => {
    return(
        <div id='shelInfos'>
            <ul id='infos'>
                <li id='shelType' className='resize'><span>Spécialité(s) :</span> {props.data.specializeAt && props.data.specializeAt.map((item) => { return `  ${item}`})}</li>
                <li id='shelAddress' className='resize'><span>Adresse :</span> {props.data.address}</li>
                <li id='shelEmail' className='resize'><span>Email :</span> {props.data.email} </li>
                <li id='shelPhone01'><span>Téléphone 01 :</span> {props.data.phone01}</li>
                <li id='shelPhone02' style={props.data.phone02 ? {display: 'inline'} : {display: 'none'}}><span>Téléphone 02 :</span> {props.data.phone02}</li>
            </ul>
            <p id='description'>
                {props.data.description}
            </p>
        </div>
    );
}

export default ShelInfos;