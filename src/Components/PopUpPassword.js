import React, { useState } from 'react';

import '../css/PopUpPassword.css';

const PopUpPassword = (props) => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isDifferent, setIsDifferent] = useState(false);

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }; 

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }; 
     
    const [isLoaded, setIsLoaded] = useState(false);
    const [isResult, setIsResult] = useState('');
    const [isError, setIsError] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);

    const updatePassword = () => {
        if(password !== confirmPassword) {
            setIsDifferent(true);
        } else {
            const url = 'http://localhost:3050/hj2adm/admin/password';
            const token = localStorage.getItem('token');
            const itemId = props.id;

            fetch(url, {
                method: 'PUT',
                body: JSON.stringify({
                    id: itemId,
                    password: password
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
                    setIsConfirmed(true);              
                    console.log("Load:", isLoaded, "Data:", isResult);
                },
                (error) => {
                    setIsLoaded(true);
                    setIsError(error);
                    console.log("Load:", isLoaded, "validError:", isError);
                }
            );
        };
    };

    if(isConfirmed === false) {
        return(
            <div className='popUpPassword' style={props.newPassword ? {display: 'flex'} : {display: 'none'}}>
                <div className='updateWindow'>
                    <p>Veuillez entrer un nouveau mot de passe.</p>
                    <input type='password' onChange={handlePassword}/>
                    <p>Confirmez le nouveau mot de passe.</p>
                    <input type='password' onChange={handleConfirmPassword}/>
                    {isDifferent ? <p className='error'>Les mots de passes sont différents !</p> : null}
                    <div className='buttons'>
                        <button onClick={updatePassword}>Confirmer</button>
                        <button onClick={props.isNewPassword}>Annuler</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className='popUpPassword'>
                <div className='updateWindow'>
                    <p>Mot de passe changé !</p>
                    <button className='return' onClick={props.isNewPassword}>Retour</button>
                </div>
            </div>
        );
    };
};

export default PopUpPassword;