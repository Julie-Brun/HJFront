import React, { useState } from 'react';

import '../css/PopUpDelete.css'

const PopUpDelete = (props) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [isResult, setIsResult] = useState('');
    const [isError, setIsError] = useState('');

    const deleteOk = () => {
        props.isDeleteOk();
    };

    const deleteShelter = () => {
        const token = localStorage.getItem('token');
        const itemId = props.id;
                    
        fetch(props.url, {
            method: 'DELETE',
            body: JSON.stringify({
                id: itemId
            }),
            headers: {
                'Authorization': 'Bearer ' + token,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setIsResult(result);
                deleteOk();                
                console.log("Load:", isLoaded, "Data:", isResult);
            },
            (error) => {
                setIsLoaded(true);
                setIsError(error);
                console.log("Load:", isLoaded, "validError:", isError);
            }
        );
    };

    return(
        <div className='popUpDelete' style={props.isDeleting ? {display: 'flex'} : {display: 'none'}}>
            <div className='deleteWindow'>
                <p>Voulez-vous vraiment supprimer <br/>"{props.name}" ?</p>
                <div>
                    <button onClick={deleteShelter}>Confirmer</button>
                    <button onClick={props.Delete}>Annuler</button>
                </div>
            </div>
        </div>
    );
};

export default PopUpDelete;